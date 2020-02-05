import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShareContactsService } from 'src/app/sharecontacts.service';
import { EmailExistsValidator } from './email.validators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css'],
  providers: [EmailExistsValidator]
})
export class AddContactsComponent implements OnInit {
  updateMode = false;
  routeObj = null;
  contactStatus = [{
    key: 'Active',
    value: 1
  },
  {
    key: 'Inactive',
    value: 0
  }];
  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneno: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
    status: new FormControl(1)
  });
  constructor(private sharedcontactservice: ShareContactsService, private validator: EmailExistsValidator, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe(qparam => {
      if (qparam.get('edit')) {
        this.route.paramMap.subscribe(params => {
          let tempObj = { firstname: params.get('firstname'), lastname: params.get('lastname'), email: params.get('email'), phoneno: params.get('phoneno'), status: JSON.parse(params.get('status')) };
          this.form.setValue(tempObj);
          this.routeObj = { ...tempObj };
          this.updateMode = JSON.parse(qparam.get('edit'));
        })
      } else {
        this.form.get('email').setValidators([Validators.required, Validators.email, this.validator.emailExists(this.sharedcontactservice)]);
      }
    })
  }
  addContact() {
    if (!this.form.invalid) {
      if (this.updateMode) {
        this.sharedcontactservice.updateContact(this.form.value);
        alert("Contact Updated Successfully");
      } else {
        this.sharedcontactservice.addContact(this.form.value);
        alert("Contact Added Successfully");
      }
      this.form.reset();
    }
  }
  get disableCheck() {
    if (this.updateMode && this.routeObj) {
      if (JSON.stringify(this.routeObj) === JSON.stringify(this.form.value)) {
        return true;
      } else {
        if (this.form.invalid) {
          return true;
        }
      }
    } else {
      if (this.form.invalid) {
        return true;
      }
    }
    return false;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get lastname() {
    return this.form.get('lastname');
  }
  get email() {
    return this.form.get('email');
  }
  get phoneno() {
    return this.form.get('phoneno');
  }
  get status() {
    return this.form.get('status');
  }
}
