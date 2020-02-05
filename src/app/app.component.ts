import { Component } from '@angular/core';
import { ShareContactsService } from './sharecontacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contacts Manager';
  constructor(private sharedcontactsservice: ShareContactsService){ }
  ngOnInit(){
  }
  ngOnDestroy(){
  }
}
