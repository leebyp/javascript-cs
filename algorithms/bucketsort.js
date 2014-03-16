/*
partition array into finite number of buckets
sort each bucket individually (in this case using insertion sort)

29 25 3 49 37 21 43

generic
n items, M max value
n buckets, each size M/n

*/
function insertSort(array){
	for (var i=1; i<array.length; i++) {
		var value = array.splice(i, 1)[0];
		for (var j=0; j<i; j++) {
			if (value < array[j]){
				array.splice(j, 0, value);
				break;
			}
			if (j === i-1){
				array.splice(j+1, 0, value);
			}
		}
	}
	return array;
}

function bucketSort(array){
	var max = 0;
	var n = array.length;
	var result = [];
	for (var i=0; i<n; i++){
		if (array[i] > max){
			max = array[i];
		}
	}
	for (var j=0; j<n; j++){	//create each bucket
		var bucket = [];
		for (var i=0; i<n; i++){
			if (array[i] > j*(max/n) && array[i] <= (j+1)*(max/n)){
				bucket.push(array[i]);		//add to bucket if in range
			}
		}
		insertSort(bucket);		//sort each bucket
		result = result.concat(bucket);
	}
	return result;
}



var numbers = [1,7,3,5,4,2,3];
bucketSort(numbers);

/*
insert sort, go through each and insert into correct location from front of array
5 	2 6 1 3 9
2 5		6 1 3 9
2 5 6 		1 3 9
1 2 5 6 		3 9
1 2 3 5 6 			9
1 2 3 5 6 9
*/