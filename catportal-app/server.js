var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongojs = require("mongojs");
var cookieSession = require('cookie-session')
var db = mongojs('mongodb://localhost:27017/catportal', ['user', 'trainerDetails', 'courseDetails', 'assessmentDetails']);
var port = '4400';
var loggedIn = false;

var app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieSession({
    name: 'session',
    keys: ['ola ola'],
    maxAge: 60 * 60 * 1000 // 24 hours
}));

app.use(express.static(path.join(__dirname, 'dist')));

// Send all other requests to the Angular app
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.post('/login', function (req, res, next) {
    const loginDetails = req.body;
    console.log(loginDetails);
    if (loginDetails.userId && loginDetails.password) {
        db.user.findOne({
            id: loginDetails.userId,
            password: loginDetails.password
        }, function (err, docs) {
            if (err) {
                console.log(err);
                next(err);

            } else if (!docs) {
                console.log('aa');
                res.json(err);
            } else if (docs) {
                console.log('bb');
                loggedIn = true;
                req.session.id = docs.id;
                req.session.batchCode = docs.batchCode;
                req.session.tainerId = docs.trainerId;
                res.json(docs);
            }
        });
    }
});

app.get('/home/trainerDetails', function (req, res, next) {

    if (loggedIn && req.session.id) {
        db.trainerDetails.findOne({
            trainerId: req.session.tainerId
        }, function (err, docs) {
            if (err) {
                console.log(err);
                next(err);
            } else if (docs) {
                res.json(docs);
            }
        })
    }
});

app.get('/home/userDetails', function (req, res, next) {

    if (loggedIn && req.session.id) {
        db.user.findOne({
            id: req.session.id
        }, function (err, docs) {
            if (err) {
                console.log(err);
                next(err);
            } else if (docs) {
                res.json(docs);
            }
        })
    }
});

app.get('/training', function (req, res, next) {

    if (loggedIn && req.session.id) {
        db.courseDetails.find(function (err, docs) {
            if (err) {
                console.log(err);
                next(err);
            } else if (docs) {
                res.json(docs);
            }
        })
    }
});

app.get('/assessment', function (req, res, next) {

    if (loggedIn && req.session.id) {
        db.assessmentDetails.find({
            id:req.session.id
        },function (err, docs) {
            if (err) {
                console.log(err);
                next(err);
            } else if (docs) {
                res.json(docs[0].details);
            }
        })
    }
});


app.get('/batchInfo', function (req, res, next) {

    if (loggedIn && req.session.id) {
        db.user.find({
            batchCode: req.session.batchCode
        }, function (err, docs) {
            if (err) {
                console.log(err);
                next(err);
            } else if (docs) {
                res.json(docs);
            }
        })
    }
});

app.get('/courseDetails', function (req, res, next) {

    if (loggedIn && req.session.id) {
        db.courseDetails.find( function (err, docs) {
            if (err) {
                console.log(err);
                next(err);
            } else if (docs) {
                res.json(docs);
            }
        })
    }
});

app.listen(port, () => console.log('server running ' + port));
