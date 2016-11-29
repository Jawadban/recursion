// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	if (obj === undefined){ 
		return undefined;
	}
  	if (obj === null){ 
  		return 'null';
  	}
  	if (typeof obj === 'string'){
  		return '"'+obj+'"';
    }
    if (typeof obj === 'number' || typeof obj === 'boolean'){
        return '' + obj;
    }


    if (Array.isArray(obj)) {
    	var arrObj =[];
        if (obj[0] === undefined)
            return '[]';
        else {
            obj.forEach(function(el) {
                arrObj.push(stringifyJSON(el));
            });
            return '[' + arrObj + ']';
        }
    }
    var arrObj = [];
       for (var key in obj) {
         if (obj[key] === undefined || typeof obj[key] === 'function') {
             return '{}';
         } else {
             arrObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
           }
       }
       return '{' + arrObj + '}';

};
