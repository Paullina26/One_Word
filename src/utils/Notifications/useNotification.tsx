import { useEffect } from 'react';
import OneSignal from 'react-onesignal';
import { User } from 'utils/GlobalContext/types';

export const useNotification = () => {
  const apiKey = process.env.REACT_APP_SIGNAL_API_KEY || '';
  const appId = process.env.REACT_APP_SIGNAL_APP_ID || '';

  const runOneSignal = async (user: User) => {
    console.log(user);
    await OneSignal.init({
      appId,
      allowLocalhostAsSecureOrigin: true,
    });

    OneSignal.Slidedown.promptPush();
    OneSignal.login(user.id);
    // OneSignal.Debug.setLogLevel('trace');
  };

  const offOneSignal = () => {
    OneSignal.logout();
  };

  const scheduleNotification = async ({ time, userId }: { time: string; userId: string }) => {
    const notificationData = {
      app_id: appId,
      target_channel: 'push',
      include_aliases: { external_id: [userId] }, // Zmodyfikuj na odpowiedni identyfikator użytkownika
      contents: {
        en: 'It is time for learn! Just one more word!',
      },
      delayed_option: 'timezone', // Planowanie z uwzględnieniem strefy czasowej użytkownika
      timezone: 'Europe/Warsaw',
      delivery_time_of_day: time, //'20:10', // Godzina wysyłki notyfikacji
      repeat_every: 'day', // Powtarzaj co dzień
    };

    try {
      const response = await fetch('https://api.onesignal.com/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${apiKey}`,
        },
        body: JSON.stringify(notificationData),
      });

      const responseData = await response.json();
      console.log('Response:', responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return { scheduleNotification, runOneSignal, offOneSignal };
};
