self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    console.log('Push event data:', data);

    const options = {
      body: data.body,
      icon: '/logo192.png',
      data: {
        url: 'https://oneword.byst.re', // Dodaj URL Twojej aplikacji PWA
      },
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  } else {
    console.error('Push event data is missing');
  }
});

self.addEventListener('notificationclick', function (event) {
  console.log('Notification click Received.');
  event.notification.close();

  const urlToOpen = 'https://oneword.byst.re'; // Pełny URL aplikacji

  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(function (clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url === urlToOpen && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
