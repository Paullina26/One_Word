import { useEffect, useState } from 'react';
import OneSignal from 'react-onesignal';
import { User } from 'utils/GlobalContext/types';

export const useNotification = () => {
  const apiKey = process.env.REACT_APP_SIGNAL_API_KEY || '';
  const appId = process.env.REACT_APP_SIGNAL_APP_ID || '';

  const runOneSignal = async (user: User) => {
    console.log(1, 'runOneSignal', user);
    await OneSignal.init({
      appId,
      allowLocalhostAsSecureOrigin: true,
    });
    // OneSignal.login(user.id);
    OneSignal.Slidedown.promptPush();
    console.log(1, await OneSignal.User.PushSubscription.optIn());
    console.log(2, await OneSignal.User.PushSubscription.optOut());
    console.log(1111111111, OneSignal.User.PushSubscription.token);
    // if (OneSignal.User.PushSubscription.token)
    //   createUser(user.id, OneSignal.User.PushSubscription.token);
  };

  //   const offOneSignal = () => {
  //     console.log(2, 'offOneSignal');
  //     OneSignal.logout();
  //   };
  //   const createUser = (userId: string, token: string) => {
  //     console.log({ token });
  //     const options = {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         identity: { external_id: userId },
  //         properties: {
  //           timezone_id: 'Europe/Warsaw',
  //         },
  //         subscriptions: [
  //           {
  //             type: 'ChromePush',
  //             enabled: true,
  //             token,
  //           },
  //         ],
  //       }),
  //       headers: { accept: 'application/json', 'content-type': 'application/json' },
  //     };
  //     fetch(`https://api.onesignal.com/apps/${appId}/users`, options)
  //       .then(response => response.json())
  //       .then(response => console.log(response))
  //       .catch(err => console.error(err));
  //   };
  //   const createSubscription = async (userId: string) => {
  //     const notificationData = {
  //       app_id: appId,
  //       subscription: {
  //         type: 'ChromePush',
  //         enabled: true, // Ustawienie subskrypcji jako włączonej
  //       },
  //     };
  //     try {
  //       const response = await fetch(
  //         `https://api.onesignal.com/apps/${appId}/users/by/external_id/${userId}/subscriptions`,
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: `Basic ${apiKey}`, // Zastąp 'apiKey' prawdziwym kluczem API OneSignal
  //           },
  //           body: JSON.stringify(notificationData),
  //         }
  //       );
  //       if (response.status === 201) {
  //         console.log('Subscription created successfully.');
  //       } else {
  //         console.error('Failed to create subscription:', response.statusText);
  //       }
  //     } catch (error) {
  //       console.error('Error creating subscription:', error);
  //     }
  //   };
  //   const scheduleNotification = async ({ time, userId }: { time: string; userId: string }) => {
  //     console.log(3, 'offOneSignal', { time, userId });
  //     const notificationData = {
  //       app_id: appId,
  //       target_channel: 'push',
  //       include_external_user_ids: [userId],
  //       contents: {
  //         en: 'It is time for learn! Just one more word!',
  //       },
  //       delayed_option: 'timezone',
  //       timezone: 'Europe/Warsaw',
  //       delivery_time_of_day: time,
  //       repeat_every: 'day',
  //     };
  //     try {
  //       const response = await fetch('https://api.onesignal.com/notifications', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Basic ${apiKey}`,
  //         },
  //         body: JSON.stringify(notificationData),
  //       });
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };
  //   const getUser = (userId: string) => {
  //     const options = { method: 'GET', headers: { accept: 'application/json' } };
  //     fetch(
  //       `https://api.onesignal.com/apps/${appId}/users/by/external_id/${userId}/identity`,
  //       options
  //     )
  //       .then(response => response.json())
  //       .then(response => console.log(response))
  //       .catch(err => console.error(err));
  //   };
  //   const createAlias = (userId: string) => {
  //     const options = {
  //       method: 'PATCH',
  //       body: JSON.stringify({ alias: userId }),
  //       headers: { accept: 'application/json', 'content-type': 'application/json' },
  //     };
  //     fetch(
  //       `https://api.onesignal.com/apps/${appId}/users/by/external_id/${userId}/identity`,
  //       options
  //     )
  //       .then(response => response.json())
  //       .then(response => console.log(response))
  //       .catch(err => console.error(err));
  //   };
  return {
    // getUser,
    // scheduleNotification,
    runOneSignal,
    // offOneSignal,
    // createUser,
    // createSubscription,
    // createAlias,
  };
};
