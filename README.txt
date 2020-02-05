Contacts Manager

COMPONENTS -

1) AppComponent(./src/app/) - ROOT COMPONENT
     1) NavbarComponent(./src/app/navbar/) ----> Consists of routes for the application components containing two tabs Add Contact and List Contacts.
     2) AddContactComponent(./src/app/contacts/add-contacts/) ----> Used for adding contacts. Reactive form is being used.
     3) ListContactsComponent(./src/app/contacts/list-contacts/) ----> Used for displaying contacts. Table is being used.


SERVICES - 

1) ShareContactsService(./src/app/) ----> Service is being used to share data among all the components and store the data at a centralized
   location.

VALIDATORS -

1) EmailExistsValidator(./src/app/contacts/add-contacts/) ----> Apart from the predefined validators, a custom validator is used considering
   every contact should have a unique email id. If an email Id is already present in contacts, error should be raised.


HOW TO RUN -
1) Open CMD.
2) Run the command "npm install" to install all the dependencies.
3) Now run the "ng serve" to start your server listening at localhost:4200.
4) Type localhost:4200 in the browser url and hit ENTER.

 Application will be running now.
				
  
