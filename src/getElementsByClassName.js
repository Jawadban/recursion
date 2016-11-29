// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
	var nodes = [];
  	function classLookOut(node) {
    	if (_.contains(node.classList, className)) {
     		 nodes.push(node);
    	}
    	_.each(node.childNodes, function(child) {
      		classLookOut(child);
    	});
  	}
  classLookOut(document.body);
  return nodes;
};

