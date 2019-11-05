
const createService = require('feathers-mongoose');
const createModel = require('../../models/book.model');
const hooks = require('./book.hooks');
const filters = require('./book.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'book',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/books', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('/books');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
