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
        Customers.find().toArray(function (err, docs) {
            if(err) throw err;

            response.render('storeData', {results: docs});
        });

        Billing.find().toArray(function (err, docs) {
            if(err) throw err;

            response.render('storeData', {results: docs});
        });

        Shipping.find().toArray(function (err, docs) {
            if(err) throw err;

            response.render('storeData', {results: docs});
        });

        Orders.find().toArray(function (err, docs) {
            if(err) throw err;

            response.render('storeData', {results: docs});
        });

        db.close(function (err) {
            if(err) throw err;
        });
    });
};

