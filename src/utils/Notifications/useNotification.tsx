import fetchWithToken from 'API/api';
import { useEffect, useState } from 'react';

export const useNotification = () => {
  const [isSubscription, setIsSubscription] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getSubscription();
  }, []);

  const getVapidKey = async () => {
    const resp = await fetchWithToken({
      endpoint: 'vapidPublicKey',
      method: 'GET',
    });

    return resp.response;
  };

  const getSubscription = async () => {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    setIsSubscription(Boolean(subscription));
  };

  const subscribeUser = async (userId?: string) => {
    setIsLoading(true);
    if (!userId) return;

    const publicKey = await getVapidKey();

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
            await fetchWithToken({
              endpoint: 'subscribe',
              method: 'POST',
              body: { subscription, userId },
            });
            setIsSubscription(true);
          })
          .catch(err => {
            console.error('Failed to subscribe the user: ', err);
          })
          .finally(() => setIsLoading(false));
      });
    }
  };

  const sendNotification = async (title: string, body: string, userId?: string) => {
    // try {
    //   const resp = await fetchWithToken({
    //     endpoint: 'sendNotification',
    //     method: 'POST',
    //     body: { title, body, userId },
    //   });
    //   console.log('Notification sent successfully', resp);
    // } catch (error) {
    //   console.error('Error sending notification:', error);
    // }
  };

  const unsubscribeUser = async (userId?: string) => {
    setIsLoading(true);
    if (!userId) return;

    if ('serviceWorker' in navigator && 'PushManager' in window) {
      console.log('is');
      try {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();

        if (subscription) {
          await subscription.unsubscribe();
          console.log('User unsubscribed successfully');
          setIsSubscription(false);

          await fetchWithToken({
            endpoint: 'unsubscribe',
            method: 'DELETE',
            body: { userId },
          });
        } else {
          console.error('User is not subscribed');
        }
      } catch (error) {
        console.error('Failed to unsubscribe the user: ', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    isLoading,
    subscribeUser,
    sendNotification,
    getVapidKey,
    unsubscribeUser,
    isSubscription,
  };
};
