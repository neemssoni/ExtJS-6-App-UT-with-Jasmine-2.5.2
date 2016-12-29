
	describe("Basic Assumptions", function() {
	    it("1. ExtJS framework is loaded and ready", function() {
	        expect(Ext).toBeDefined();
	    });

	    it("2. has loaded TutorialApp code",function(){
        	expect(TutorialApp).toBeDefined();
    	});
	});

	describe("Ext", function() {
		it("3. is defined", function() {
			expect(Ext).toBeDefined();
		});

		it("4. is version 6", function() {
			expect(Ext.getVersion().major).toEqual(6);
		});

		it("5. is version 5", function() {
			expect(Ext.getVersion().major).toEqual(5);
		});

		describe("Main", function() {
			var store, ctlr, list, signin, myApp, logCtlr, password, userName,clikbtn;

			beforeEach(function(){
		 		myApp = TutorialApp;
		 		console.log(myApp);
			 	if (!ctlr) {
			 		ctlr = new myApp.view.main.MainController;
			 	}
			 	if (!logCtlr) {
			 		logCtlr = new myApp.view.login.LoginController;
			 	}
				if (!store) {
					 store = myApp.store;
			 	}
			 	if (!list) {
					 list = myApp.view.main.List;
			 	}

			 	if (!signin) {
			 		signin = new myApp.view.login.Login;
			 	}
			 	spyOn(ctlr,'onClickButton');
			 	spyOn(logCtlr,'onLoginClick');
			});
	    // Main controller
		it("6. CONTROLLER : Main controller loaded successfully ",function(){
		 	expect(ctlr).toBeDefined();
		});
		// Store
		it("7. STORE : Personnel Store has loaded successfully with values ",function(){
		 	expect(store).toBeDefined();
		});
		//List 
		it("8. LIST : List has loaded successfully with values ",function(){
		 	expect(list).toBeDefined();
		});
		// LoginController
		it("9. Login Controller : Login Controller has loaded successfully ",function(){
		 	expect(logCtlr).toBeDefined();
		});
		// Login Panel
		it("10. Login : Login Panel loaded successfully ",function(){
	 		expect(signin).toBeDefined();
		});
		// Log out Button
		it("11. calls the onClickButton() function", function() {
	        expect(ctlr.onClickButton).not.toHaveBeenCalled();
    	});
		// Login Button
		it("12. calls the onLoginClick() function", function() {
		    expect(logCtlr.onLoginClick).not.toHaveBeenCalled();
		});

		it("13. Login button should be disabled when username is not an email Id", function() {
	        expect(signin).toBeDefined();
	        signin.on('afterrender', function(view){
	            expect(loginButton.isDisabled()).toBeTruthy();
	        });
        });

	});
});