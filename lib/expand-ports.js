'use strict';

// http://forums.accellera.org/topic/6024-parameters-and-parameterized-port-widths-in-ipxact-1685-2009/

const expandWire = wire => {
  if (wire['width'] && wire['direction']) {
    return wire;
  } else {
    let width = wire;
    let direction = 'in';

    if (typeof width === 'number') {
      if (width < 0) {
        width = -width;
        direction = 'out';
      }
    } else if (typeof width === 'string') {
      if (width.slice(0, 1) === '-') {
        width = width.slice(1);
        direction = 'out';
      }
    } else {
      throw new Error(typeof width);
    }

    return {
      direction: direction,
      width: width
    };
  }
};

const expandPorts = ports => {
  if (ports.constructor !== Object) {
    return ports.foreach((port) => {
      port.wire = expandWire(port['wire']);
    });
  }

  return Object.keys(ports).reduce((res, name) => {
    return res.concat({
      name: name,
      wire: expandWire(ports[name])
    });
  }, []);
};

module.exports = expandPorts;
