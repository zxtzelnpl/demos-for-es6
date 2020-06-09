import "core-js/modules/es.array.includes";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.map";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";
import user from './user';
import dog from 'dog.js';

var a = function a() {
  console.log('b');
};

var array = [1, 2, 3, 4];
console.log(array.includes(2));
var obj = {
  a: 'a',
  b: 'b'
};
console.log(Object.keys(obj));
var promise1 = new Promise();
var map = new Map();