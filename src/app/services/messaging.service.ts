import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'
@Injectable()
export class MessagingService {
  private message = new BehaviorSubject(null);
  sharedMessage = this.message.asObservable();

  currentMessage = new BehaviorSubject(null);
  public displayToken;
  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      (_messaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }
//  nextMessage(message: string) {
  //  this.message.next(message)
  //}
   requestPermissions() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log("Notification permission granted.");
        this.message.next(token);
        console.log(token);
      },
      (err) => {
        console.log('Unable to get permission to notify.', err);
      }
    );
  }
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      })
  }
}
