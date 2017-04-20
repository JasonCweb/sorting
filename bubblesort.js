function bubbleSort(arr){
    var haveSwapped = true;
    while( haveSwapped ) {
        haveSwapped = false;
        for(var j = 0; j < arr.length - 1; j++) {
            if (compare(arr, j)) haveSwapped = true;
        }
    }
    return arr;
}

function swap(arr, index) {
    
    var placeholder = arr[index];
    arr[index] = arr[index+1];
    arr[index+1] = placeholder;

}

function compare(arr, j) {
    if(arr[j] > arr[j+1]){
        swap(arr, j);
        return true;
    }
    return false;
}