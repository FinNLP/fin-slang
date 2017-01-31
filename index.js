const slangs = require('./list.js');
module.exports = {
	id:"interceptor",
	extension:function(str){
		slangs.forEach((s)=>str = str.replace(s[0],s[1]));
		return str;
	}
};