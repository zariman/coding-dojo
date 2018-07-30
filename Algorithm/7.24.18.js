/* // Array Reverse

function arrayReverse(arr){
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(arrayReverse(["A","B","C","D", "E", "F", "G"]));

 */

/*  function arrayRotate(arr){
     var newArr = [];
     newArr.push(arr.pop());
     for(var i = 0; i < arr.length; i++){
         newArr.push(arr[i]); 
     }
     return newArr;
 }
  */

/*  function arrayRotate(arr, leftOrRight){
    var temp;
    if(leftOrRight == "left"){
        var temp = arr[0];
        for(var i = 0; i < arr.length; i++){
            arr[i] = arr[i+1];
        }
        arr[arr.length-1] = temp;
    }
    else if(leftOrRight == "right"){
        var temp = arr[arr.length-1];
        for(var i = arr.length - 1; i >= 0; i--){
            arr[i] = arr[i-1];
        }
        arr[0] = temp;
    }
    
    
    return arr;
 }
 console.log(arrayRotate([1,2,3,4], "left")); */

 /* function filterRange(arr, start, end){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= start && arr[i] <= end){
            arr[i]=arr[arr.length-1];
            arr.pop();
            i--;
        }
    }
    return arr;
 } */

/*  function filterRange(arr, start, end){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < start || arr[i] > end){
            newArr.push(arr[i]);
        }
    }
    return newArr;
 } */
/*  function filterRange(arr, start, end){
     for(var i = 0; i < arr.length; i++){
        if(arr[i] >= start && arr[i] <= end){
            for(var j = i; j < arr.length-1; j++){
                arr[j] = arr[j+1];
            }
            arr.pop();
            i--;
        }
     } 
     return arr;
 }

 console.log(filterRange([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 6, 15));
 */

function doubleTrouble(arr){
    var temp = arr.length;
    for (var i = 0; i < temp; i++){
        arr.push(arr[Math.floor(arr.length/2)]);
    }
    for (var i = temp-1; i >= 0; i--){
        arr[i] = arr[Math.floor(i/2)];
    } 
    return arr; 
}

 console.log(doubleTrouble([1,2]));

/*  function count(arr){
     var newArr = [];
     for (var i = 0; i <= 9; i++){
        var count = 0;
        for (var j = 0; j < arr.length; j++){
            if(arr[j] == i){
                count++;
            }
        }
        newArr.push(count);
     }
     return newArr;
 } */

 function count(arr){
    var newArr = [0,0,0,0,0,0,0,0,0,0];
    for (var i = 0; i <= 9; i++){
       var count = 0;
       for (var j = 0; j < arr.length; j++){
           if(arr[j] == i){
               count++;
           }
           newArr[j] = count;
       }
    }
    return newArr;
}
 console.log(count([1,5,7,6,3,1,2,4,5,9,3,1,2,0]));

