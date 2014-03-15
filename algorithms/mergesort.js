/*
sort each pair of elements,
sort every four elements by merging every two pairs
sort every 8....
O(nlogn)

6 5 3 1 8 7 2 4
56	13	78	24
1356	2478
12345678
*/

function replaceMergeSort(arr){

	function merge(leftarray, rightarray) {
		var result = [];
		while(leftarray.length && rightarray.length) {
			if (leftarray[0] <= rightarray[0]) {
				result.push(leftarray.shift());
			}
			else {
				result.push(rightarray.shift());
			}
		}
		if (leftarray.length){
			return result.concat(leftarray);
		}
		else {
			return result.concat(rightarray);
		}
	}

	function mergeSort(array){
		if (array.length < 2){
			return array
		}
		var middle = Math.floor(array.length/2);
		var leftarray = array.slice(0, middle);
		var rightarray = array.slice(middle);

		return merge(mergeSort(leftarray), mergeSort(rightarray));
	}

	arr = mergeSort(arr);
	return arr;
}

var numbers = [6,5,3,1,8,7,2,4,3,6,10];
replaceMergeSort(numbers);