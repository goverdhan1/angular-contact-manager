describe('app.js unit tests', function() {
	describe('home routing', function() {
		var $rootScope, 
			$state, 
			$injector, 
			state = 'home', 
			httpBackend;

		beforeEach(function() {
			localApp = module('app', function($provide){

			});

			inject(function(_$rootScope_, _$state_, _$injector_, $httpBackend) {
				$rootScope = _$rootScope_;
				$state = _$state_;
				$injector = _$injector_;

                $httpBackend.when("GET").respond({});
                httpBackend = $httpBackend;
			});


		});

		it('should respond to home URL', function() {
			expect($state.href(state)).toEqual('#/home');
		});

		it('should respond to addContact URL', function() {
			expect($state.href("addContact")).toEqual('#/addContact');
		});

		it('should respond to editContact URL', function() {
			expect($state.href("editContact")).toEqual('#/editContact/');
		});
	});
});
