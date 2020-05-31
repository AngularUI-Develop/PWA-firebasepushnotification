import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MessagingService } from '../app/services/messaging.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule,StorageBucket  } from '@angular/fire/storage';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase,{ enabled: environment.production }), 
    //ServiceWorkerModule.register('combined-sw.js', { enabled: environment.production })
  ],
  providers: [AsyncPipe,MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
