"use strict";

require("core-js/modules/web.immediate");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const a = () => {
  console.log('b');
};

const map = new Map();
const b = [1, 2];
const c = new Promise();
console.log(b.includes(1));
const MyName = {
  a,
  user: _user.default,
  map
};
var _default = MyName;
exports.default = _default;