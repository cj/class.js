
// Class - Core - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

/**
 * Create a "class" with the given _proto_.
 *
 * Example:
 *
 *   var User = new Class({
 *     constructor: function(name){
 *       this.name = name
 *     },
 *     toString: function(){
 *       return '[User ' + this.name + ']'
 *     }
 *   })
 *
 *   var Admin = User.extend({
 *     constructor: function(name) {
 *       User.call(this, name.toUpperCase())
 *     }
 *   })
 *
 *   puts(new Admin('tj'))
 *   // => "[User TJ]"
 *
 * @param  {object} proto
 * @return {function}
 * @api public
 */

function Class(proto) {
  var Class = proto.hasOwnProperty('constructor')
    ? proto.constructor
    : (proto.constructor = function(){})
  Class.prototype = proto
  Class.extend = arguments.callee
  return Class
}

Class.prototype = Function.prototype

/**
 * Exports.
 */

exports.Class = Class
