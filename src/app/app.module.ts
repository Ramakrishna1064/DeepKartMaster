import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationService } from './Services/Registration.Service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MessageService } from './Services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule,
    ReactiveFormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [RegistrationService, MessageService],
  bootstrap: [AppComponent],
  entryComponents: [
    SignUpComponent
  ]
})
export class AppModule { }
