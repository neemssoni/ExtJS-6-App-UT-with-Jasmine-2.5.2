
Ext.define('TutorialApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

//     init: function() {
//         this.control({
//       // bind an event to a specific ID.
//         '#foobar': {
// //        test_event: this.onLoginClick // WORKS, BUT IS NOT TESTABLE - the spy will replace the implementation of onLoginClick, but won't change the listener
//         test_event: Ext.Function.alias(this, 'onLoginClick') // ALSO WORKS, AND IS TESTABLE
//     },

    onLoginClick: function() {
        //var value1 = Ext.ComponentQuery.query('textfield[name=userame]')[0].getValue();
        // var uname= Ext.getCmp('username').value;
        // var pword= Ext.getCmp('password').value;
        // var uname = TutorialApp.down('textfield[name=username]').getValue();   
        // var pword = TutorialApp.down('textfield[name=password]').getValue();
        // alert(uname);
        // alert(pword);
        // // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        localStorage.setItem("TutorialLoggedIn", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'app-main'
        });

    }
});