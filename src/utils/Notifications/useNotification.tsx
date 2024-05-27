import fetchWithToken from 'API/api';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {};

export const useNotification = () => {
  const getVapidKey = async () => {
    const resp = await fetchWithToken({
      endpoint: 'vapidPublicKey',
      method: 'GET',
    });

    console.log(7777, resp);
    return resp.response;
  };

  const subscribeUser = (publicKey: string, userId: string) => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(registration => {
        const subscribeOptions = {
          userVisibleOnly: true,
          applicationServerKey: publicKey,
        };

        registration.pushManager
          .subscribe(subscribeOptions)
          .then(async subscription => {
            console.log('Received PushSubscription:', subscription);
            const resp = await fetchWithToken({
              endpoint: 'subscribe',
              method: 'POST',
              body: { subscription, userId },
            });

            console.log(resp);
          })
          .catch(err => {
            console.error('Failed to subscribe the user: ', err);
          });
      });
    }
  };

  const sendNotification = async (title: string, body: string, userId?: string) => {
    try {
      const resp = await fetchWithToken({
        endpoint: 'sendNotification',
        method: 'POST',
        body: { title, body, userId },
      });

      console.log('Notification sent successfully', resp);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return { subscribeUser, sendNotification, getVapidKey };
};
