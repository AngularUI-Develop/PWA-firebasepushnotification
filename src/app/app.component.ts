import { Component, OnInit, HostListener } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { MessagingService } from '../app/services/messaging.service';
import * as firebase from 'firebase/app';
import 'firebase/messaging';
import { environment } from 'src/environments/environment';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public deferredPrompt;
  public message;
  
  showButton = false;
  
  title = 'push-notification';
  
  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }

  constructor(private messagingService: MessagingService,
    private afMessaging: AngularFireMessaging) { }
    
 /* constructor(private swPush: SwPush) { 
    this.swPush.notificationClicks.subscribe( event => {
      console.log('Received notification: ', event);
      const url = event.notification.data.url;
      window.open(url, '_blank');
  });*/
  /*requestPushNotificationsPermission() { // requesting permission
    this.afMessaging.requestToken // getting tokens
      .subscribe(
        (token) => { // USER-REQUESTED-TOKEN
          console.log('Permission granted! Save to the server!', token);
        },
        (error) => {
          console.error(error);
        }
      );
  }*/
  requestPushNotificationsPermission()
  {
    this.messagingService.sharedMessage.subscribe(message => this.message = message)
  }
  ngOnInit() {
   /*const userId = 'user001';
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage;*/
    
   this.messagingService.requestPermissions();       
  this.messagingService.receiveMessage();
  this.message = this.messagingService.currentMessage;
  }

  addToHomeScreen() {
    // hide our user interface that shows our A2HS button
    this.showButton = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
  }

}
