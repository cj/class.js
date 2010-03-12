
require.paths.unshift('lib')

var sys = require('sys'),
    Class = require('class').Class,
    times = 50000

function bm(label, fn) {
  var start = +new Date
  fn()
  sys.puts('    ' + label + ' : ' + (+new Date - start) + ' ms')
}

sys.puts('     running : ' + times + ' times')

bm('class.js', function(){
  var n = times
  while (n--) {
    var User = new Class({
      constructor: function(name){
        this.name = name.trim()
      }
    })
    var Admin = User.extend({
      constructor: function(name){
        User.call(this, name)
      }
    })
  }
})