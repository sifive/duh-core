'use strict';

const update = require('immutability-helper');

const findVLNV = require('./find-vlnv.js');

/* construct component from design */

const extractor = (instances, catalog, resComp, s1, s2) =>
  connection => {
    const s1name = connection[s1];
    const [instName, biName] = connection[s2];
    const inst = instances.find(e => e.name === instName);
    const comp = findVLNV(catalog.components, 'component', inst.ref);
    const bi = comp.busInterfaces.find(e => e.name === biName);
    const idx = bi.abstractionTypes.findIndex(e => e.viewRef === 'RTLview');
    const compPorts = comp.model.ports;
    resComp.busInterfaces.push(update(bi, {
      name: {$set: s1name},
      abstractionTypes: {[idx]: {portMaps: portMaps =>
        Object.keys(portMaps).reduce((res, logicName) => {
          const phyName = portMaps[logicName];
          const newName = s1name + '_' + phyName;
          res[logicName] = newName;
          resComp.model.ports[newName] = compPorts[phyName];
          return res;
        }, {})
      }}}));
  };

module.exports = (catalog, design) => {
  const {vendor, library, name, version} = design;
  const resComp = {
    vendor, library, name, version,
    model: {ports: {}},
    busInterfaces: []
  };

  // import bus interfaces
  design.connections
    .filter(e => (e.import !== undefined) && (e.target !== undefined))
    .map(extractor(design.instances, catalog, resComp, 'import', 'target'));

  // export bus interfaces
  design.connections
    .filter(e => (e.source !== undefined) && (e.export !== undefined))
    .map(extractor(design.instances, catalog, resComp, 'export', 'source'));

  return {component: resComp};
};
