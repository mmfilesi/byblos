const mongoose = require('mongoose'),  
const Schema   = mongoose.Schema;

const booksSchema = new Schema({
  author:         { type: String },
  title:          { type: String },
  year:           { type: Number },
  category:       { type: String },
  subcategory:    { type: String }
});

module.exports = mongoose.model('Books', booksSchema); 