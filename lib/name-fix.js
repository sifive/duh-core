'use strict';

// xs:Name = \i\c*
const nameWireds = /[[\]()]/g;
const nameExpr = /^[_:A-Za-z][-._:A-Za-z0-9]*$/;
const nameExpr1 = /^[-._:A-Za-z0-9]+$/; // fixable

module.exports = arr => {
  const hash = {};

  arr.map((e, i) => {
    let name = e.name;

    if (name === undefined) {
      console.error('noname element', i, e);
      return;
    }

    if (typeof name !== 'string') {
      console.error('name of', typeof name, 'type', i, e);
      return;
    }

    if (name.match(nameExpr) === null) {
      const name1 = name.replace(nameWireds, '_');
      if (name1.match(nameExpr) !== null) {
        console.log('name pattern fixed', i, name, '-->', name1);
      }
      name = name1;
    }

    if (name.match(nameExpr) === null) {
      if (name.match(nameExpr1) === null) {
        console.error('name pattern unfixable', i, name);
      } else {
        const name1 = '_' + name;
        console.log('name pattern fixed', i, name, '-->', name1);
        name = e.name = name1;
      }
    }

    const index = hash[name];
    if (index === undefined) {
      hash[name] = 0;
    } else {
      const name1 = name + index;
      console.log('duplicate name fixed', i, name, '-->', name1);
      name = e.name = name1;
    }

  });
  return arr;
};
