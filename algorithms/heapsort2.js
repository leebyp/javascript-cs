function heapsort(a){
	var count = a.length;
	heapify(a, count);
	var end = count-1;
	while (end > 0){
		swapfunc(a, end, 0);
		//end--;
		//siftUp(a, 0, end);
		heapify(a, end)			//need to siftup through all, since simple parents would miss siblings
		end--					//change order since sifting up
	}
	return a;
}

function heapify(a, count){
	var tempend = 1;
	while (tempend < count){
		siftUp(a, 0, tempend);	//as before but sift up through parents
		tempend++;				
	}
}

function siftUp(a, start, end){
	var child = end;
	while (child > start){
		var parent = Math.floor((child-1)/2);
		if (a[parent] < a[child]){			//swap if parent < child
			swapfunc(a, parent, child);
			child = parent;					//keep sifting all the way to top
		}
		else {
			return;
		}
	}
}

function swapfunc(array, index1, index2){
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

numbers = [1,6,3,6,4,6,4,5,6,10,14,12]
heapsort(numbers)