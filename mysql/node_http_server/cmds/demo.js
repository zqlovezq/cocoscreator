/**********************************************************
指令demo
**********************************************************/


module.exports = function(req, rp, params) {
	rp.a = params.a || '';

	rp.on(test, 'a', function(err, data) {
		if (err) {
			rp.err = 'ERROR_MESSAGE';
		} else {
			rp.result = {
				b: data
			};
		}
	});

	rp.if(function() {

	});

	rp.else(function() {

	});

	//返回结果
	rp.end();
};


function test(a, callback) {
	if (a == 1) {
		callback(true);
	} else {
		callback(null, 2);
	}
}