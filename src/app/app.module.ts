import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListContactsComponent } from './contacts/list-contacts/list-contacts.component';
import { AddContactsComponent } from './contacts/add-contacts/add-contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareContactsService } from './sharecontacts.service';

@NgModule({
  declarations: [
  AppComponent,
  ListContactsComponent,
  AddContactsComponent,
  NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ShareContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
