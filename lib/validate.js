'use strict';

const validateSchema = require('./validate-schema.js');


const validateRegisters = (duh) => {
  const mms = duh.component && duh.component.memoryMaps || [];
  mms.map((mm, imm) => {
    const abs = mm.addressBlocks || [];
    let pos = 0;
    let prev;
    abs.map((ab, iab) => {
      const cur = [
        mm.name,
        ab.name,
        '0x' + ab.baseAddress.toString(16),
        '0x' + (ab.baseAddress + ab.range).toString(16)
      ];
      if (ab.baseAddress >= pos) {
        pos = ab.baseAddress + ab.range;
        prev = cur;
      } else {
        console.error('Collition of addressBlocks within the same memoryMap', prev, cur);
        throw new Error();
      }
    });
  });
};

const validate = async (duh) => {
  await validateSchema(duh);
  validateRegisters(duh);
  // console.log('valid!');
};

module.exports = validate;
