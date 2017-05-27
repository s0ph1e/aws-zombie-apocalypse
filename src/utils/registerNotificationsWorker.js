var swRegistration, isSubscribed
var appPublicKey = 'BCgJR6BdesiWyjqcOp0qRmAq1Fk-dZ_ZwJdd18JCgl7n6kpgY38NVNowMkkRbx3uuCtS_AaakYvOqwwYzkg0Oro'

if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported')

  navigator.serviceWorker.register('static/sw.js')
    .then(function (swReg) {
      console.log('Service Worker is registered', swReg)

      swRegistration = swReg
      console.log(swRegistration)
      initialize()
    })
    .catch(function (error) {
      console.error('Service Worker Error', error)
    })
} else {
  console.warn('Push messaging is not supported')
}

window.addEventListener('logout', unsubscribeUser)

function initialize () {
  swRegistration.pushManager.getSubscription()
    .then(function (subscription) {
      isSubscribed = !(subscription === null)

      if (isSubscribed) {
        console.log('User IS subscribed.')
      } else {
        console.log('User is NOT subscribed.')
        subscribeUser()
      }
    })
}

function subscribeUser () {
  const applicationServerKey = urlB64ToUint8Array(appPublicKey)
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  }).then(function (subscription) {
    console.log('User is subscribed.')
    // Subscribe on server
    console.log(JSON.stringify(subscription))

    isSubscribed = true
  }).catch(function (err) {
    console.log('Failed to subscribe the user: ', err)
  })
}

function unsubscribeUser () {
  swRegistration.pushManager.getSubscription()
    .then(function (subscription) {
      if (subscription) {
        return subscription.unsubscribe()
      }
    })
    .catch(function (error) {
      console.log('Error unsubscribing', error)
    })
    .then(function () {
      // unsubscribe on server

      console.log('User is unsubscribed.')
      isSubscribed = false
    })
}

function urlB64ToUint8Array (base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

