import { useRef, useState } from 'react';

export const useRecording = () => {
  const [isRecording, setIsRecording] = useState(false);

  const [recordedUrl, setRecordedUrl] = useState<string>('');
  const [recorderBlob, setRecorderBlob] = useState<Blob | null>(null);
  const mediaStream = useRef<MediaStream | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    console.log('START');
    setIsRecording(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStream.current = stream;
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (e: BlobEvent) => {
        if (e.data.size > 0) {
          chunks.current.push(e.data);
        }
      };
      mediaRecorder.current.onstop = () => {
        const recordedBlob = new Blob(chunks.current, { type: 'audio/wav' });
        console.log(recordedBlob);
        setRecorderBlob(recordedBlob);
        const url = URL.createObjectURL(recordedBlob);
        setRecordedUrl(url);
        chunks.current = [];
      };
      mediaRecorder.current.start();
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    console.log('STOP');
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.stop();
    }
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach(track => {
        track.stop();
      });
    }
    setIsRecording(false);
  };

  return { startRecording, stopRecording, recordedUrl, recorderBlob, isRecording };
};
