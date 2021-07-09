// Problem 1

function is_array(input){
    return Array.isArray(input);

}
console.log(is_array("w3resource"));
console.log(is_array([1,2,4,0]));


// Problem 2

function array_clone(arr){
    return arr.slice(0)
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


// Problem 3

function first(arr, n=0){
    if (n == 0){
        return arr[0];
    }
    if (n < 0){
        return [];
    }
    if (n > arr.length){
        return arr;
    }
    else{
        return arr.slice(0, n);
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


// Problem 4

function myColor(arr,sep){
    return arr.join(sep);
}
console.log(myColor(["Red", "Green", "White", "Black"], ','));
console.log(myColor(["Red", "Green", "White", "Black"], '+'));


// Problem 5

function most_freq(arr){
    var freq = 0;
    var mode = 1;
    var item;
    for(var i=0; i < arr.length; i++){
        for(var j=i; j < arr.length; j++){
            if (arr[i] == arr[j]){
                freq++;
            }
            if (freq>mode){
                mode = freq;
                item = arr[i];
            }
        }
        freq=0;
    }
    return item + " (" + mode + " times)";
}
console.log(most_freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));