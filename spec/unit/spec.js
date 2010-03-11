
describe 'Class'
  it 'should be an instanceof Function'
    (new Class).should.be_an_instance_of Function
  end
  
  it 'should be an instanceof Class'
    (new Class).should.be_an_instance_of Class
  end
  
  describe 'instances'
    it 'should be an instance of their respective class'
      var User = new Class
      var tj = new User
      tj.should.be_an_instance_of User
    end
    
    describe '#constructor'
      it 'should reflect the class not passed'
        var User = new Class
        var tj = new User
        tj.constructor.should.equal User
      end
      
      it 'should reflect the class passed'
        var User = new Class({
          constructor: function(name) {
            this.name = name
          }
        })
        var tj = new User('tj')
        tj.constructor.should.equal User
      end
      
      it 'should be called upon creation of the instance'
        var User = new Class({
          constructor: function(name) {
            this.name = name
          }
        })
        var tj = new User('tj')
        tj.name.should.eql 'tj'
      end
    end
  end
end