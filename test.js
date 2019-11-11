var index = require("./index");
var chai = require("chai");
var expect = chai.expect;
chai.should();

describe('decompose module', function(){
	describe('is_prime function', function(){
		it('should return false when zero is provided', function() {
			index.is_prime(0).should.equal(false)  
		});
		it('should return false when negative number is not prime', function() {
			index.is_prime(-5).should.equal(false)
		});
		it('should return false when number is not prime', function() {
			index.is_prime(4).should.equal(false)
		});
		it('should return true when number is prime', function() {
			index.is_prime(17).should.equal(true)
		});
	});
	describe('decompose function', function(){
		it('correctly decompose number', function() {
			expect(index.decompose(4)).to.eql([2, 2]) 
		});
	});
});
