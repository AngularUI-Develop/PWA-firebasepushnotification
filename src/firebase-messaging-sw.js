importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

  firebase.initializeApp({
    apiKey: "AIzaSyAHaut9mLkEm8kKwJFTD1jbhK6DE1sSaCY",
    authDomain: "pwa-pushnotification-8bdf9.firebaseapp.com",
    databaseURL: "https://pwa-pushnotification-8bdf9.firebaseio.com",
    projectId: "pwa-pushnotification-8bdf9",
    storageBucket: "pwa-pushnotification-8bdf9.appspot.com",
    messagingSenderId: "700929451563",
    appId: "1:700929451563:web:917fe29b456757bc90ec6e",
    measurementId: "G-Z9787Y112W"
  });
  const messaging = firebase.messaging();
  
  messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
     
    };
  
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  /*messaging.requestPermission().then(function () {
     MsgElem.innerHTML = "Notification permission granted." 
     console.log("Notification permission granted.");

     // get the token in the form of promise
     return messaging.getToken()
   })
   .then(function(token) {
     // print the token on the HTML page
     TokenElem.innerHTML = "token is : " + token
   })
   .catch(function (err) {
   ErrElem.innerHTML = ErrElem.innerHTML + "; " + err
   console.log("Unable to get permission to notify.", err);
 });
/* messaging.onMessage(function(payload) {
  console.log("Message received. ", payload);
  NotisElem.innerHTML = NotisElem.innerHTML + JSON.stringify(payload) 
});*/