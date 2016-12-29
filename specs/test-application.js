Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath({
    TutorialApp: '../TutorialApp/app'
});

var Application = null;

Ext.require('Ext.app.Application');
Ext.require('TutorialApp.view.main.Main');
Ext.require('TutorialApp.view.main.List');
Ext.require('TutorialApp.store.Personnel');
Ext.require('TutorialApp.view.main.MainController');
Ext.require('TutorialApp.view.login.LoginController');
Ext.require('TutorialApp.view.login.Login');

Ext.onReady(function() {
    Application = Ext.define('Ext.app.Application', {
        name: 'TutorialApp',
        views: [
            'List',
            'Main',
            'Login',
        ],
        stores: [ 
            'Personnel' 
        ],
        controllers: [
            'MainController',
            'LoginController'
        ],

        autoCreateViewport: true,
        launch: function () {
            var jasmineEnv = jasmine.getEnv();
            jasmine.htmlReporter.initialize();
            jasmineEnv.execute();
        }
    });
});

// Ext.Application ({
//     autoCreateViewport: false,
//     name: 'TutorialApp',
//     appFolder : 'app',
//     stores: [ 'TutorialApp.store.Personnel' ],
//     launch: function () {
//         var jasmineEnv = jasmine.getEnv();
//         jasmine.htmlReporter.initialize();
//         jasmineEnv.execute();
//     }
// });