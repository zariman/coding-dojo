/* function sigma(x){
    var sum = 0;
    for(var i = 1; i <= x;i++){
        sum += i;
    }
    return sum;
}
console.log(sigma(5)); */

/* function factorial(x){
    var y = 1;
    for(var i = 1; i <= x; i++){
        y *= i;
    }
    return y;
}
console.log((factorial(5))); */

/* function fibonacci(x){
    var arr = [];
    var sum = 0;
    arr[0] = 0;
    arr[1] = 1;
    for(var i = 2; i <= x; i++){
        arr[i] = arr[i-2]+arr[i-1];
    }
    return arr[x];
}
console.log(fibonacci(25)); */

/* function secondToLast(arr){
    if(arr.length >= 2){
        return arr[arr.length-2];
    }
    else{
        return null;
    }
}
console.log(secondToLast([42, true, 4, "Liam", 7])); */

/* function nthToLast(arr, n){
    if(arr.length >= n){
        return arr[arr.length-n];
    }
    else{
        return null;
    }
}
console.log(nthToLast([5,2,3,6,4,9,7], 3)); */

/* function secondLargest(arr){
    var firstLargest = Number.MIN_VALUE;
    var secondLargest = Number.MAX_VALUE;
    if(arr.length >= 2){
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > firstLargest){
                secondLargest = firstLargest;
                firstLargest = arr[i];
            }
            if(arr[i] < firstLargest && arr[i] > secondLargest){
                secondLargest = arr[i];
            }
        }
        return secondLargest;
    }
    else{
        return null;
    }
}
console.log(secondLargest([42, 1,4,3.14,7])); */

/* function doubleTrouble(arr){
    var newArr = [];
    for(var i = 0; i < arr.length;i++){
        for(var j=0; j < 2; j++){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(doubleTrouble([4, "Ulysses", 42, false])); */

/* function fib(n){
    if(n == 0 || n == 1){
        return n;
    }
    return fib(n-2) + fib(n-1);
}
console.log(fib(7)); */