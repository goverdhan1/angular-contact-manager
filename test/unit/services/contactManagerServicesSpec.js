'use strict';

describe('Contact Manager Service Tests', function() {

  beforeEach(module('app'));

  var locaLContactManagerServices;

  var injectContactManagerServices = inject(function(contactManagerServices) {
    locaLContactManagerServices = contactManagerServices;
  });

  describe('dependancy injection tests', function() {

    beforeEach(function() {
      injectContactManagerServices();
    });

    it('should inject dependencies', function() {
      expect(locaLContactManagerServices).toBeDefined();
      var contacts = locaLContactManagerServices.getContacts();
      expect(typeof contacts).toBe('object');
    });

  });

});