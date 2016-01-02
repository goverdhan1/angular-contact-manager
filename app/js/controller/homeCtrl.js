'use strict';

app.controller('homeCtrl', ['$scope', 'contactManagerServices', '$state', '$stateParams', function(scope, contactManagerServices, state, stateParams){

	scope.contacts = contactManagerServices.getContacts();

	// Method to add a new contact in contacts
	scope.addContactBtn = function(addContact){
		addContact.image=scope.contacts.length+1;
		scope.contacts.push(addContact);
		state.go('home');
	};

	// Method to delete a contact from contacts
	scope.deleteContact = function(index){
		scope.contacts.splice(index, 1);
	}

	// Method to edit a contact
	scope.editContactBtn = function(editContact,index){
		scope.contacts[index]=editContact;
		state.go('home');
	}

}]);
