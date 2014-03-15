/*
find smallest element using linear scan, move to front,
second smallest, move, until all elements in place
O(n^2)

64 25 12 22 11
11 64 25 12 22
11 12 64 25 22
11 12 22 64 25
11 12 22 25 64
*/

function selectionSort(array){
	for (var j=0; j<array.length-1; j++) {
		var minIndex = j;
		for (var i=j+1; i<array.length; i++) {
			if (array[i] < array[minIndex]) {
				minIndex = i;
			}
		}
		if (minIndex !== j) {
			var minValue = array.splice(minIndex,1);
			array.splice(j, 0, minValue[0]);			//slot into xth-smallest position
			/*var x = array[j];
			array[j] = array[minIndex];
			array[minIndex] = x;
			*/
		}
	}
	return array;
}

var numbers = [64, 25, 12, 22, 11, 25, 23];
selectionSort(numbers);