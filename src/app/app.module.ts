import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import { HomeComponent } from './home/home.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { StartComponent } from './start/start.component';
import { NaladkaComponent } from './naladka/naladka.component';
import { FormComponent } from './form/form.component';
import { DocumentComponent } from './document/document.component';
import { SignatureComponent } from './signature/signature.component';
import { LastComponent } from './last/last.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QrcodeComponent,
    StartComponent,
    NaladkaComponent,
    FormComponent,
    DocumentComponent,
    SignatureComponent,
    LastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
