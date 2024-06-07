self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    console.log('Push event data:', data);

    const options = {
      body: data.body,
      icon: '/logo192.png',
      // badge: 'badge.png',
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  } else {
    console.error('Push event data is missing');
  }
});
