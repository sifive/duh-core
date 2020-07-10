'use strict';

const nameFix = require('./name-fix.js');

const perRegister = register => {
  const fields = register.fields || [];
  nameFix(fields);
};

const perAddressBlock = addressBlock => {
  const registerFiles = addressBlock.registerFiles;
  if (registerFiles != undefined) {
    nameFix(registerFiles);
    registerFiles.map(perAddressBlock);
  } else {
    const registers = addressBlock.registers || [];
    nameFix(registers);
    registers.map(perRegister);
  }
};

const perMemoryMap = memoryMap => {
  const addressBlocks = memoryMap.addressBlocks || [];
  nameFix(addressBlocks);
  addressBlocks.map(perAddressBlock);
};

const uniquifyNames = duh => {
  const component = duh.component || {};
  // const busInterfaces = component.busInterfaces || {};
  const memoryMaps = component.memoryMaps || [];
  nameFix(memoryMaps);
  memoryMaps.map(perMemoryMap);
};

module.exports = uniquifyNames;
