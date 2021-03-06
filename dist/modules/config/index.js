'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _pkginfo = require('pkginfo');

var _pkginfo2 = _interopRequireDefault(_pkginfo);

require('colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _pkginfo2.default)(module);

_commander2.default.version(module.exports.version).option('-p, --port <port>', 'Specific server port.').option('-f, --force-ip <ip>', 'Force the netease server ip.').option('-k, --kugou', 'No longer support.').option('-q, --qq', 'No longer support.').option('-r, --rewrite-url', 'Rewrite music download url, let client download file through proxy.').option('-v, --verbose', 'Display errors.').parse(process.argv);

if (_commander2.default.kugou || _commander2.default.qq) {
  console.log('The option --kugou and --qq is no longer support.'.yellow);
}

if (_commander2.default.port && (_commander2.default.port < 1 || _commander2.default.port > 65535)) {
  console.log('Port must be higher than 0 and lower than 65535.'.red);
  process.exit(1);
}

if (_commander2.default.forceIp && !/\d+\.\d+\.\d+\.\d+/.test(_commander2.default.forceIp)) {
  console.log('Please check the ip address.'.red);
  process.exit(1);
}

if (_commander2.default.rewriteUrl) {
  console.log('Rewrite music download url.'.green);
}

exports.default = _commander2.default;