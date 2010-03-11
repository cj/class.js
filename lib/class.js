
// Class - Core - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

function Class(props) {
  props = props || {}
  var Class = props.hasOwnProperty('constructor')
    ? props.constructor
    : (props.constructor = function(){})
  Class.prototype = props
  Class.extend = arguments.callee
  return Class
}

Class.prototype = Function.prototype

// --- Helpers

/**
 * Extend object _a_ with object _b_,
 * returning object _a_.
 *
 * @param  {object} a
 * @param  {object} b
 * @return {object}
 * @api public
 */

function extend(a, b) {
  for (var key in b)
    if (b.hasOwnProperty(key))
      a[key] = b[key]
  return a
}

/**
 * Exports.
 */

exports.Class = Class