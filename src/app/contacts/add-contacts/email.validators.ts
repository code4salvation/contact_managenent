import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ShareContactsService } from 'src/app/sharecontacts.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EmailExistsValidator{
    emailExists( sharecontactsservice: ShareContactsService) : ValidatorFn{
        return (control: AbstractControl) : ValidationErrors | null =>{
            let emailArray = sharecontactsservice.contacts.map(obj =>{
                return obj.email;
            });
            if(emailArray.indexOf(control.value) >= 0){
                return { emailExists : true};
            }
            return null;
        }
        
    } 
}