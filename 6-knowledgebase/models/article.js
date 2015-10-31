var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: {
    type: String,
    index: true,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  category: {
    type: String,
    index: true,
    required: true
  },
  date: {
    type: date,
    default: Date.now
  }
});

var Article = module.exports =mongoose.model('Article', articleSchema);


// Get ALL articles
module.exports.getArticles = function(callback) {
  Article.find(callback);
};

// Get Article By Id
module.export.getArticlesById = function(id, callback) {
  Article.findById(id, callback);
};

// Get Category Articles
module.export.getArticleByCategory = function(category, callback) {
  var query = {category: category};
  Article.find(query, callback);
};






















