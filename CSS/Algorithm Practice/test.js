
function removeNeg(arr){
    for(var i = arr.length-1; i >= 0; i--){
        if(arr[i] < 0){
            arr[i] = arr[arr.length-1];
            arr.pop()
        }
    }
    return arr;
}

/* function removeNeg(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = arr.pop()
            i--;
        }
    }
    return arr;
} */

console.log(removeNeg([-1,3,-5, 3, 2, 3, 4, 5, 2, 3, 4, 2, 3, 2,3, -2]));