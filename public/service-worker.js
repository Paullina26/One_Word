self.addEventListener('push', event => {
  console.log('Push event received:', event);

  // Sprawdzenie, czy event.data jest dostępny
  if (event.data) {
    const data = event.data.json();
    console.log('Push event data:', data);

    const options = {
      body: data.body,
      icon: '/logo192.png', // Zastąp ścieżką do ikony, jeśli masz
      // badge: 'badge.png', // Zastąp ścieżką do badge, jeśli masz
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  } else {
    console.error('Push event data is missing');
  }
});
