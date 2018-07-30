/* function greaterThanY(arr, y)
{
    var newArr = [];
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            count++;
            newArr.push(arr[i]);
        }
    }
    console.log("count:", count, ",", newArr);
}

greaterThanY([1,2,3,4,5], 3); */

/* function minMaxAvg(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for(var i = 0; i<arr.length;i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
        sum += arr[i];
    }
    var avg = sum/arr.length;
        console.log("min:", min + "\n" +
                    "max:", max + "\n" +
                    "avg:", avg);
}

minMaxAvg([5,4,3,2,1]); */

/* function replaceNegatives(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(replaceNegatives([1,2,-3,-5,5])); */

/* function removeVals(arr, start, end){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(!((i >= start)&&(i <= end))){
            newArr.push(arr[i]);
        }
    }
    return newArr;
} */

function removeVals(arr, start, end){
    var temp = start;
    for(i = end+1; i < arr.length; i++){
        arr[temp] = arr[i];
        temp++;
    }
    for(var i = 0; i <= end-start; i++)
        arr.pop();
    return arr;
}
console.log(removeVals([20,30,40,50,60,70],2,4));
console.log(removeVals([0,1,2,3,4,5,6,7,8,9],3,6));
console.log(removeVals([0,1,2,3,4,5,6,7,8,9],5,5));