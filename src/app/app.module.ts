import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'registration-form', component: RegistrationFormComponent },
      { path: 'login-page', component: LoginPageComponent },
      { path: '', redirectTo: '/registration-form', pathMatch: 'full' }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
