var mongoose = require('mongoose');
var photo = mongoose.model('Photo');

var express = require('express');
var router = express.Router();

router.route("/")
    .get((req, res) => {
    photo.find({}, function (err, photos) {
        res.json({
            photos: photos.map((photo) => {
                return photo.toDto();
            })
        });
    });    
    })
    .post((req, res) => {
    if (!req.body.title) {
        res.sendStatus(422);
    }
    
    var item = new photo();
    item.name = req.body.name;
    item.description = req.body.desc;
    
    item.save().then(() => {
        res.json(item.toDto());
    })
    })
    .delete((req, res) => {
    req.photo.remove().then(function () {
        return res.sendStatus(200);
    });
    });

module.exports = router;