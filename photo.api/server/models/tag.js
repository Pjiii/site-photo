var mongoose = require('mongoose');
 
let TagSchema = new mongoose.Schema({
   name: { type: String, maxlength: 200 },
}, { timestamps: true });
 
 
TagSchema.methods.toDto = function () {
   return {
        id: this._id,
        name: this.name
   }
};
 
mongoose.model('Tag', TagSchema);