Ext.define('TutorialApp.store.Personnel', {
    extend: 'Ext.data.Store',
    storeId : 'Personnel',
    alias: 'store.personnel',
    fields: [
        'name', 'email', 'phone'
    ],

    data: { items: [
        { name: 'Neelam', email: "neelam@enterprise.com", phone: "9610288813" },
        { name: 'Soni',     email: "neemssoni@enterprise.com",  phone: "9066712151" },
        { name: 'Prerna',   email: "prerna.troi@enterprise.com",    phone: "8384996446" },
        { name: 'Darsh',     email: "mr.darsh@enterprise.com",        phone: "9680899333" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
