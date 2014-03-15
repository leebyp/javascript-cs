/*
pick a random element and partition the array to numbers less than and more than
then partition again for each half, each quarter
O(nlogn) expected, O(n^2) worst case

3 2 4 1 5 5 9 8 7 6
1 3 2 4 		5		5 6 9 8 7 
 
*/

//creating new arrays
function quickSort(array){
	if (array.length === 0){
		return array;
	}
	var pivotIndex = Math.floor(array.length/2)
	var pivot = array[pivotIndex];
	var leftarray = [];
	var rightarray = [];

	for (var i=0; i<array.length; i++){
		if (i !== pivotIndex){
			if (array[i] <= pivot){
				leftarray.push(array[i]);
			}
			else {
				rightarray.push(array[i]);
			}
		}
	}
	return [].concat(quickSort(leftarray), [pivot], quickSort(rightarray));
}

var numbers = [3,2,4,1,5,5,9,8,7,6];
numbers = quickSort(numbers);


//faster using swapping
function swap(array, index1, index2){
	var x = array[index1];
	array[index1] = array[index2];
	array[index2] = x;
}

function partition(array, leftindex, rightindex){		//partition array into left and right, returning index of intersect
	var pivot = array[Math.floor((rightindex+leftindex)/2)];
	var i = leftindex;
	var j = rightindex;

	while(i <= j){
		while (array[i] < pivot){
			i++;
		}
		while (array[j] > pivot){
			j--
		}
		swap(array, i, j)
		i++;
		j--;
	}

	return i;
}

function quickSort(array, leftindex, rightindex){
	
	if (array.length <= 1){								//stops recursion
		return array;
	}

	index = partition(array, leftindex, rightindex);

	if (leftindex < index-1){							//ensure left and right indices make sense before sorting
		quickSort(array, leftindex, index-1);
	}
	if (index < rightindex){						
		quickSort(array, index, rightindex);			
	}

	return array;

}

var numbers = [3,2,4,1,5,5,9,8,7,6];
numbers = quickSort(numbers, 0, numbers.length-1);


