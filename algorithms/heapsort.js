/*
O(nlogn)
1. heap built out of data
2. remove largest element and insert into array, heap updated


iParent = floor((i-1)/2);
iLeftChild = 2*i + 1;
iRightChild = 2*i + 2;

*/

function heapsort(a){
	var count = a.length;
	heapify(a, count);			//build initial heap
	var end = count-1;			
	while (end > 0){			//maintains a[end:count] is sorted
		swapfunc(a, end, 0);	//moves largest @ a[0] to a[end]
		end--;					//then work on second largest
		siftDown(a, 0, end);	//reorder the new heap
	}
	return a;
}

function heapify(a, count){
	start = Math.floor((count-2)/2);	//iParent of last element (i = count-1)
	while (start >= 0){					//from the bottom all the way to the top of the heap
		siftDown(a, start, count-1);
		start--;
	}
}

function siftDown(a, start, end){
	var root = start;
	while (root*2 +1 <= end){			//while root has at least one child
		var child = root*2 +1;			
		var swap = root;
		if (a[swap] < a[child]){		//check left child
			swap = child;
		}
		if (child+1 <= end && a[swap] < a[child+1]){		//if right child, checks
			swap = child+1;
		}
		if (swap !== root){
			swapfunc(a, root, swap);
			root = swap;				//keeps sifting to check the child after swap
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