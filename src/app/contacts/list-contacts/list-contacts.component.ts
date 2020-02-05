import { Component, OnInit, Input } from '@angular/core';
import { ShareContactsService } from 'src/app/sharecontacts.service';

@Component({
  selector: 'list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent implements OnInit {
  contactsList = [];
  contactHeaders = ["Name", "Email Id", "Phone No", "Status"];

  constructor(private sharedcontactservice: ShareContactsService){
    this.contactsList = [...this.sharedcontactservice.contacts];
  }
  removeContact(data: any){
    this.sharedcontactservice.removeContact(data, this.contactsList);
  }
  ngOnInit(){

  }
}
