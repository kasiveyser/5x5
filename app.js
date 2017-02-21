var set = 5;
var arr = function () {
	var arr = [];
	for(i=0; i < set*set; i++){
		arr[i] = i;
	}
	return arr;
}();

console.log(arr);
var randArr = [];

while(arr.length) {
    var index = Math.random() * arr.length >> 0;
    var item = arr.splice(index, 1)[0];
    randArr.push(item);
}

console.log(JSON.stringify(randArr));