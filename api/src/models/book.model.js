// book-model.js - A mongoose model

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const book = new mongooseClient.Schema({
    name : {
      type: String, required: [true, 'Book Name is required']
    },
    author : { type: String, required: [true, 'Author Name is required'] },
    price: {type: String, required: [true,'Price is required']},
    rating: {type: String, required: [true, 'Please specify the rating']},
    genre : {
      type: String,
      required: [true, 'Genre is required']
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('book', book);
};
