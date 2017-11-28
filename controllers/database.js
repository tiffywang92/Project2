var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://wang:wang33@ds245755.mlab.com:45755/heroku_8vdpfmgs';

module.exports.storeData = function(request, response) {

    mongodb.MongoClient.connect(mongoDBURI, function(err, db) {
        if (err) {
            throw err;
        }

        // get collections
        var Customers = db.collection('Customers');
        var Billing = db.collection('Billing');
        var Shipping = db.collection('Shipping');
        var Orders = db.collection('Orders');

        // log output by collection id
        var a = Customers.find({});
        var b = Billing.find({});
        var c = Shipping.find({});
        var d = Orders.find({});

        a.forEach(
            function(myDoc) {
                console.log( "_id: " + myDoc._id );
            }
        );
        b.forEach(
            function(myDoc) {
                console.log( "_id: " + myDoc._id );
            }
        );
        c.forEach(
            function(myDoc) {
                console.log( "_id: " + myDoc._id );
            }
        );
        d.forEach(
            function(myDoc) {
                console.log( "_id: " + myDoc._id );
            }
        );

        db.close(function (err) {
            if(err) throw err;
        });
    });
};

