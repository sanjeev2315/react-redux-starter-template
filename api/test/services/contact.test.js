const assert = require('assert');
const app = require('../../src/app');

describe('\'book\' service', () => {
  it('registered the service', () => {
    const service = app.service('books');

    assert.ok(service, 'Registered the service');
  });
});
