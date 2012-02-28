
module.exports = function(x1, y1, x2, y2, n){

	var xs = [0];
	var ys = [0];

	var x = 0;

	for (var i = 1; i < (n - 1); i++){
		var u = 1 / n * i,
			a = Math.pow(1 - u, 2) * 3 * u,
			b = Math.pow(u, 2) * 3 * (1 - u),
			c = Math.pow(u, 3);
		var _x = x1 * a + x2 * b + c;
		var _y = y1 * a + y2 * b + c;
		if ((_x - x) > (10 / n)){
			x = _x;
			xs.push(_x);
			ys.push(_y);
		}
	}

	xs.push(1);
	ys.push(1);

	return function(t){

		var left = 0, right = xs.length - 1;
		while (left <= right){
			var middle = Math.floor((left + right) / 2);
			if (xs[middle] == t) break;
			else if (xs[middle] > t) right = middle - 1;
			else left = middle + 1;
		}

		return ys[middle];
		
	};	

};