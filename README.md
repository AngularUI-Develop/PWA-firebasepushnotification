# PWA-firebasepushnotification

This Repository contains code of PWA push Notification with firebase hosting 

1. Creating PWa Application in Angular 
2. Install http-server package 
3. create firebase-messaging.sw.js file and import in app.module.ts file
4. Modify firebase cloud Server configuration in firebase-messaging.sw.js
5. Create a service file which contains method of requestPermissions, receiveMessage 
Please find the code details in Repository 
To Run application Paste URL in Postman 
1. https://fcm.googleapis.com/fcm/send
Pass Authorization , Content-Type object in headers 
Paste Notification Object in Body 
{ "notification": {"body": "testing example ", "title": "push notification demo"},
	"to":"dw_aPxp6NDs:APA91bGazD-bjSc7sWfE7iH2fc7UM3wCXdl54D-ClPNvh8cfvOfKIcoOHPMq7SqpZOmyvuktie-9-oRdzeqPHR5ZU0XEXUU2T5Tpg4YTMsWRiv4DC_trVrrlzW-OjIzcEAHcW6xLkUSc"
}
2. Run Application through Firebase Cloud Messaging 


