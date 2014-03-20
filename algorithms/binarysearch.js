/*
search algorithm through already sorted array, logn
*/

function binarySearch(sortedArray, target){
	var imin = arguments[2] || 0;
	var imax = arguments[3] || sortedArray.length-1;
	var imid = Math.floor(imin+((imax-imin)/2));
	if (sortedArray[imid] > target){
		return binarySearch(sortedArray, target, imin, imid-1);
	}
	else if (sortedArray[imid] < target){
		return binarySearch(sortedArray, target, imid+1, imax);
	}
	else {
		return imid;
	}
}

var a = [1,3,3,6,9,10,14,20];
binarySearch(a, 10);