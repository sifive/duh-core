'use strict';

module.exports = def => t => def[t.vendor][t.library][t.name][t.version];
