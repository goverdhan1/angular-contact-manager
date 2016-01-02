'use strict';

describe('Home Controller Tests', function() {

    // Global vars
    var homeController = null;
    var scope = null;
    var contact= {
					id: 1,
              		name : 'Terrence S',
              		tel: '651-603-1723',
              		email: 'TerrenceS@rhyta.com',
              		image: 2
				};

    beforeEach(module('app'));

    // Inject dependencies
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        homeController = $controller('homeCtrl', {
            $scope: scope
        });
        scope.contacts = [
            {
              id: 1,
              name : 'Terrence S. Hatfield',
              tel: '651-603-1723',
              email: 'TerrenceSHatfield@rhyta.com',
              image: 1
            }
          ];


    }));

    // Unit Specs
		it('should test addContactBtn() method', function() {

			expect('addContactBtn').toBeDefined();
			scope.addContactBtn(contact);
			expect(scope.contacts.length).toEqual(2);
				
		});

		it('should test editContactBtn() method', function() {
				expect('editContactBtn').toBeDefined();
				scope.editContactBtn(contact, 0);
				expect(scope.contacts[0]).toEqual(contact);
		});

		it('should test deleteContact() method', function() {
				expect('deleteContact').toBeDefined();
				scope.deleteContact(1);
				expect(scope.contacts.length).toEqual(1);
		});

});