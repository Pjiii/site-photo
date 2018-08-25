var mongoose = require('mongoose');
var tag = require('./tag') 


let PhotoSchema = new mongoose.Schema({
   name: { type: String, maxlength: 200 },
   description: { type: String, maxlength: 2000 },
   url: { type: String, maxlength: 2000 },
   tags: { type: [tag], default: []}
}, { timestamps: true });
 
 
PhotoSchema.methods.toDto = function () {
    return {
        id: this._id,
        name: this.name,
        description: this.description,
        url: this.url,
        tags: this.tags
    }
};
 
mongoose.model('Photo', PhotoSchema);