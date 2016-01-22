var meshMixin = require('../meshMixin');
var registerPrimitive = require('../registerPrimitive');
var utils = require('../../../utils/');

var boxDefinition = utils.extendDeep({}, meshMixin(), {
  defaultAttributes: {
    geometry: {
      primitive: 'box'
    }
  },

  mappings: {
    depth: 'geometry.depth',
    height: 'geometry.height',
    translate: 'geometry.translate',
    width: 'geometry.width'
  }
});

registerPrimitive('a-box', boxDefinition);
registerPrimitive('a-cube', utils.extendDeep({
  deprecated: '<a-cube> is deprecated. Use <a-box> instead.'
}, boxDefinition));
