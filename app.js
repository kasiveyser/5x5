var set = 5;

function startArr() {
	var arr = [];
	for(i=0; i < set*set; i++){
		arr[i] = i;
	}
	return arr;
}

var randArr = [];

function randomizeArr(){
	var arr = startArr();
	randArr = [];
	// if(randArr > 0) {
	// 	randArr.length = 0;
	// 	console.log("clear randArr \n" + randArr);
	// }

	while(arr.length) {
	    var index = Math.random() * arr.length >> 0;
	    var item = arr.splice(index, 1)[0];
	    randArr.push(item);
	}
	console.log(randArr);
}

randomizeArr();

// console.log(JSON.stringify(randArr));

function renderTable() {
	var tableArr = "";
	for(let i = 0; i < set*set; i++){
		if ((i+1)%set === 0){
			tableArr = tableArr + (randArr[i] + 1).toString() + "\n";
		}else{
			tableArr = tableArr + (randArr[i] + 1).toString() + " ";
		}
	}
	console.log(tableArr);
	return tableArr;
}

function restartTable (){
	randomizeArr();
	renderTable();
}