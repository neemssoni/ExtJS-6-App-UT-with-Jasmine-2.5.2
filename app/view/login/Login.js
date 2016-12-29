Ext.define('TutorialApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'TutorialApp.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            itemId : 'userName',
            fieldLabel: 'Username',
            allowBlank: false,
            maxlength : 20,
            vtype: 'email'
        }, {
            xtype: 'textfield',
            name: 'password',
            itemId : 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            minlength : 6
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            itemId : 'loginButton',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    },

});