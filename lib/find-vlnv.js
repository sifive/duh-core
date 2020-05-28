'use strict';
// @flow

/*
  TODO API
*/

const findVLNV = (
  arr /*: Array<{}> */,
  kind /*: string */,
  vlnv /*: {} */
) /*: {} */ =>
  (arr.find(e =>
    Object.keys(vlnv).reduce((res, key) =>
      res && (vlnv[key] === e[kind][key]), true
    )
  ))[kind];

module.exports = findVLNV;
