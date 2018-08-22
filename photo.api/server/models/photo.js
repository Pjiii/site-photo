var mongoose = require('mongoose');
 
let PhotoSchema = new mongoose.Schema({
   name: { type: String, maxlength: 200 },
   description: { type: String, maxlength: 2000 },
   url: { type: String, maxlength: 2000 }
}, { timestamps: true });
 
 
PhotoSchema.methods.toDto = function () {
    return {
        id: this._id,
        name: this.name,
        description: this.description,
        url: this.url
    }
};
 
mongoose.model('Photo', PhotoSchema);