var mongoose = require('mongoose');
var photo = mongoose.model('Photo');
var tag = mongoose.model('Tag');

var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer({ 
                dest: 'c:\\workspace\\upload-test\\'
            });

router.route('/')
    .get((req, res) => {
        photo.find({}, function (err, photos) {
            res.json( photos.map((photo) => {
                return photo.toDto();
            }));    
        }).catch((err) => { console.log(err); res.status(500) });
    })
    .post(upload.single('photo'), (req, res) => {

        var item = new photo();
        item.name = req.body.name;
        item.description = req.body.description;
        item.url = req.file.originalname;

        var tags = [];
        var tagstemp = JSON.parse(req.body.tags);
        var promises = tagstemp.map(function(element) {
            return new Promise(function(resolve, reject) {
                tag.findOne({_id: element.id}, function(err, t) {
                    tags.push(t);
                    resolve();
                })
            });                     
        });

        Promise.all(promises).then(function() {
            item.tags = tags;
            item.save();
            res.send(200);
        }).catch((err) => { console.log(err); res.status(500) });   
        
    })
    .delete((req, res) => {
        req.photo.remove().then(function () {
            return res.sendStatus(200);
        }).catch((err) => { console.log(err); res.status(500) });
    });

module.exports = router;