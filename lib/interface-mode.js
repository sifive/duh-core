'use strict';

exports.isInitiator = e =>
  ((e.interfaceMode === 'initiator') || (e.interfaceMode === 'master'));

exports.isTarget = e =>
  ((e.interfaceMode === 'target') || (e.interfaceMode === 'slave'));

exports.onInitiator = e => e.onInitiator || e.onMaster;

exports.onTarget = e => e.onTarget || e.onSlave;
