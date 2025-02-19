'use strict';

const readDuh = require('./read-duh.js');
const expandAll = require('./expand-all.js');
const validateSchema = require('./validate-schema.js');
const findVLNV = require('./find-vlnv.js');
const aVLNV = require('./a-vlnv.js');
const getGetBusDef = require('./get-get-bus-def.js');
const nameFix = require('./name-fix.js');
const uniquifyNames = require('./uniquify-names.js');
const designComponent = require('./design-component.js');
const interfaceMode = require('./interface-mode.js');
const validate = require('./validate.js');

exports.readDuh = readDuh;
exports.expandAll = expandAll;
exports.validateSchema = validateSchema;
exports.findVLNV = findVLNV;
exports.aVLNV = aVLNV;
exports.getGetBusDef = getGetBusDef;
exports.nameFix = nameFix;
exports.uniquifyNames = uniquifyNames;
exports.designComponent = designComponent;
exports.interfaceMode = interfaceMode;
exports.validate = validate;

