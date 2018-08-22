var mongoose = require('mongoose');
var tag = mongoose.model('Tag');

var express = require('express');
var router = express.Router();
router.route("/")
    .get((req, res) => {
        tag.find({}, function (err, tags) {
            res.json({
                tags: tags.map((tag) => {
                   return tag.toDto();
               })
            });
        });    
     })
     .post((req, res) => {
        if (!req.body.title) {
            res.sendStatus(422);
        }
    
        var item = new tag();
        item.name = req.body.name;
      
        item.save().then(() => {
            res.json(item.toDto());
        })
     })
     .delete((req, res) => {
        req.tag.remove().then(function () {
            return res.sendStatus(200);
        });
     });

module.exports = router;
