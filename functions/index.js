const admin = require('firebase-admin');
admin.initializeApp();
admin.firestore().collection("test").doc("testdoc").set({ "thisisa": "test" });
