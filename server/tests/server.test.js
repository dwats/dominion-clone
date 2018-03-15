/* eslint-disable */
const { expect } = require('chai');

const { app } = require('../server');

describe('#server.js', () => {
  it('should exist', () => {
    expect(app).to.exist;
  });
});
