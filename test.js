const fin = require('finnlp');
const assert = require('assert');

describe('before adding extension', function () {
	var p = new fin("u shd c it");
	it('tokens are wrong', function () {
		assert.equal(p.result[0].tokens[0],"u");
		assert.equal(p.result[0].tokens[1],"shd");
		assert.equal(p.result[0].tokens[2],"c");
	});
});

describe('after adding extension', function () {
	fin.extend(require('./index.js'));
	var p = new fin("u shd c it");
	it('tokens are correct', function () {
		assert.equal(p.result[0].tokens[0],"you");
		assert.equal(p.result[0].tokens[1],"should");
		assert.equal(p.result[0].tokens[2],"see");
	});
});