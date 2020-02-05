import { Injectable } from '@angular/core';

@Injectable()
export class ShareContactsService {
  sharedContactsList = [
    {
      firstname: "John", 
      lastname: "Williams",
      email: "jwilliams@xyz.com", 
      phoneno: "8911223344", 
      status: 1
    },
    { 
      firstname: "Sean", 
      lastname: "Jacobs", 
      email: "sjacobs@xyz.com", 
      phoneno: "8911220044", 
      status: 1}
  ];
  constructor() { }
   get contacts(){
     return this.sharedContactsList;
   }
   addContact(data: any){
     this.sharedContactsList.push(data);
   }
   removeContact(data: any, sharedContactsList: any[]){
     let emailId = sharedContactsList.map(obj =>{
       return obj.email
     });
     sharedContactsList.splice(emailId.indexOf(data.email), 1);
     if(this.sharedContactsList.length){
      this.sharedContactsList.splice(emailId.indexOf(data.email), 1);
     }
   }
   updateContact(data: any){
    if(this.sharedContactsList.length){
      let emailId = this.sharedContactsList.map(obj =>{
        return obj.email
      });
      if(emailId.indexOf(data.email) != -1)
        this.sharedContactsList[emailId.indexOf(data.email)] = data;
      else
        this.sharedContactsList.push(data);
    }
   }
}
