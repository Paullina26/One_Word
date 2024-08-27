import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import fetchWithToken from '@api/api';

const daysOfWeek = [
  { label: 'Monday', value: '1' },
  { label: 'Tuesday', value: '2' },
  { label: 'Wednesday', value: '3' },
  { label: 'Thursday', value: '4' },
  { label: 'Friday', value: '5' },
  { label: 'Saturday', value: '6' },
  { label: 'Sunday', value: '7' },
];

const MAX_NOTIFICATIONS = 5;

interface FormValues {
  notifications: { time: Date | null; type: string }[];
  summaryDay: string;
  breakDay: string;
}

const useLearningSettings = () => {
  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);

  const { control, handleSubmit, setValue, watch, reset } = useForm<FormValues>({
    defaultValues: {
      notifications: [{ time: null, type: '1' }],
      summaryDay: '6',
      breakDay: '7',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'notifications',
  });

  const formatTime = (time: Date | null) => {
    if (!time) return '';
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const fetchUserSettings = async () => {
    try {
      const response = await fetchWithToken({
        endpoint: 'getUserSettings',
        method: 'GET',
      });
      if (response.status === 200) {
        const settings = response.response;
        // const [summaryDay, breakDay, notifications] = settings;
        reset({
          notifications: settings.notifications.map((notif: any) => ({
            time: new Date(`1970-01-01T${notif.time}:00`),
            type: notif.type,
          })),
          summaryDay: settings.summaryDay.toString(),
          breakDay: settings.breakDay.toString(),
        });
      }
    } catch (error) {
      console.error('Error fetching user settings:', error);
      toast.error('Failed to fetch user settings');
    }
  };

  const onSubmit = async (data: FormValues) => {
    const formattedData = {
      ...data,
      notifications: data.notifications.map(notification => ({
        time: notification.time ? formatTime(notification.time) : '',
        type: notification.type || '1',
      })),
    };

    try {
      const response = await fetchWithToken({
        endpoint: 'updateUserSettings',
        method: 'PUT',
        body: formattedData,
      });
      console.log('Response:', response);
      toast.success('Settings updated successfully');
    } catch (error) {
      console.error('Error updating settings:', error);
      toast.error('Failed to update settings');
    }
  };

  const handleAddNotification = () => {
    const numberOfNotifications = fields.length;
    if (numberOfNotifications >= MAX_NOTIFICATIONS) {
      toast.warning(`You have reached the maximum number of notifications ${MAX_NOTIFICATIONS}`);
      setIsAddButtonDisabled(true);
    } else {
      append({ time: null, type: '1' });
    }
  };

  useEffect(() => {
    fetchUserSettings();
  }, []);

  const handleRemoveNotification = (index: number) => {
    remove(index);
    if (fields.length <= MAX_NOTIFICATIONS) {
      setIsAddButtonDisabled(false);
    }
  };

  return {
    handleRemoveNotification,
    handleAddNotification,
    isAddButtonDisabled,
    daysOfWeek,
    watch,
    handleSubmit,
    setValue,
    onSubmit,
    fields,
    control,
    fetchUserSettings,
  };
};

export default useLearningSettings;
