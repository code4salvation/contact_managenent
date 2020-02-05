import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContactsComponent } from './contacts/list-contacts/list-contacts.component';
import { AddContactsComponent } from './contacts/add-contacts/add-contacts.component';


const routes: Routes = [{
  path: 'addcontact',
  component: AddContactsComponent
},
{
  path: 'listcontacts',
  component: ListContactsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
