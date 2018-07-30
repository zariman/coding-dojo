/* function makeItBig(arr){
    for(var i = 0; i< arr.length;i++){
        if(arr[i]>0){
            arr[i]="big";
        }
    }
    return arr;
}
console.log(makeItBig([-1,3,5,-5])); */

/* function prntLowRtrnHigh(arr){
    var min = arr[0];
    var max = arr[0];
    for(var i = 0; i< arr.length;i++)
    {
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
    }
    console.log(min);
    return max;
} */

/* function prntOneRtrnHigh(arr){
    console.log(arr[length-2]);
    for(var i = 0; i< arr.length;i++){
        if(arr[i]%2==1){
            return arr[i];
        }
    }
} */

/* function doubleVision(arr){
    var newArr = arr;
    for(var i = 0; i< newArr.length;i++){
        newArr[i] *= 2;
    }
    return newArr;
}
console.log(doubleVision([1,2,3])); */

/* function countPositives(arr){
    var count = 0;
    for(var i = 0; i< arr.length;i++){
        if(arr[i] > 0){
            count++;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}
console.log(countPositives([-1,1,1,1])); */

/* function evenAndOdds(arr){
    for(var i = 0; i< arr.length-2;i++){
        if(arr[i]%2==1 && arr[i+1]%2==1 && arr[i+2]%2==1){
            console.log("That's odd!");
            i+=2;
        }
        if(arr[i]%2==0 && arr[i+1]%2==0 && arr[i+2]%2==0){
            console.log("That's even!");
            i+=2;
        }
    }
}
evenAndOdds([1,2,1,2,1,1,1,5,5,5,2,5,5,5,4,6,4,6,8]); */

/* function incrementSeconds(arr){
    for(i=0; i < arr.length; i++){
        if(i%2==1){
            arr[i]+=1;
        }
    }
    return arr;
}
console.log(incrementSeconds([1,2,3,4,5])); */

/* function previousLengths(arr){
    for(i=arr.length-1; i>0;i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}
console.log(previousLengths(["hello","dojo","awesome"])); */

/* function addSevenToMost(arr){
    var newArr = arr;
    for(i=1; i<arr.length;i++){
        newArr[i] += 7;
    }
    return newArr;
}
console.log(addSevenToMost([1,1,1,1,1,1,])); */

/* function reverseArray(arr){
    for(i=0;i<(arr.length/2);i++){
        var temp = arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
console.log(reverseArray([3,1,6,4,2,5])); */

/* function negative(arr){
    var newArr = arr;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] *= -1;
        }
    }
    return newArr;
}
console.log(negative([1,-3,5])); */

/* function alwaysHungry(arr){
    var isHungry = true;
    for(var i = 0; i< arr.length;i++){
        if(arr[i] == "food"){
            console.log("yummy");
            isHungry = false;
        }
    }
    if(isHungry){
        console.log("I'm hungry");
    }
}
alwaysHungry(["no", "no", "no", "no", "no"]); */

/* function swapTowardCenter(arr){
    for(i=0; i<(arr.length/2);i+=2){
        var temp = arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
console.log(swapTowardCenter([1,2,3,4,5,6])); */

/* function scaleArray(arr, num){
    for(var i = 0; i< arr.length; i++){
        arr[i] *= num;
    }
    return arr;
}
console.log(scaleArray([1,2,3],3)); */