'use strict';

const expandPorts = require('./expand-ports.js');

module.exports = duh => new Promise((resolve) => {

  // expand ports
  if (duh.component !== undefined) {
    const model = duh.component.model;
    model.ports = expandPorts(model.ports);
  }

  resolve(duh);
});
