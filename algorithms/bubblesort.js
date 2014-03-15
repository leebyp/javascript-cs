/*
swap first two if first > second
next pair, next pair
O(n^2)

( 5 1 4 2 8 ) \to ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
( 1 5 4 2 8 ) \to ( 1 4 5 2 8 ), Swap since 5 > 4
( 1 4 5 2 8 ) \to ( 1 4 2 5 8 ), Swap since 5 > 2
( 1 4 2 5 8 ) \to ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
*/

var bubbleSort = function(array){
	for (var j=0; j<array.length; j++){
		var checkArray = array.slice(0);
		for (var i=0; i<array.length-j; i++){
			if (array[i]>array[i+1]){
				var x = array[i];
				array[i] = array[i+1];
				array[i+1] = x;
			}
		}
		if (checkArray === array){
			return array;
		}
	}
	return array;
}

var numbers = [3,1,5,2,4,5,3];
bubbleSort(numbers)