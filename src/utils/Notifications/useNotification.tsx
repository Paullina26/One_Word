import fetchWithToken from 'API/api';

export const useNotification = () => {
  const getVapidKey = async () => {
    const resp = await fetchWithToken({
      endpoint: 'vapidPublicKey',
      method: 'GET',
    });

    return resp.response;
  };

  const subscribeUser = async (userId?: string) => {
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

  const unsubscribeUser = async (userId: string) => {
    if (!userId) return;

    if ('serviceWorker' in navigator && 'PushManager' in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();

        if (subscription) {
          await subscription.unsubscribe();
          console.log('User unsubscribed successfully');

          await fetchWithToken({
            endpoint: 'unsubscribe',
            method: 'POST',
            body: { userId },
          });
        } else {
          console.warn('User is not subscribed');
        }
      } catch (error) {
        console.error('Failed to unsubscribe the user: ', error);
      }
    }
  };

  return { subscribeUser, sendNotification, getVapidKey };
};
