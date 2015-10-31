var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  description: {
    type: String
  }
});

var Category = module.exports =mongoose.model('Category', categorySchema);


// Get ALL articles
module.exports.getCategoires = function(callback) {
  Category.find(callback);
};

// Get Article By Id
module.exports.getCategoryById = function(id, callback) {
  Category.findById(id, callback);
};

// Get Category Articles
module.exports.createCategory = function(newCategory, callback) {
  newCategory.save(callback);
};
