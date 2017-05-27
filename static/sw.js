self.addEventListener('push', function (event) {
  const text = event.data.text()
  console.log('[Service Worker] Push Received.')
  console.log(`[Service Worker] Push had this data: "${text}"`)

  const title = 'Zombie survive app'
  const options = {
    body: text,
    icon: 'sw-icon.png'
  }

  event.waitUntil(self.registration.showNotification(title, options))
})
