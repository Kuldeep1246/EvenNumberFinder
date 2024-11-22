function evenNumber(arr){
    let evenNum =[];
    let odd = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 === 0) evenNum.push(arr[i]);
        else odd.push(arr[i]);
    }
    console.log(evenNum);
}

evenNumber([2,3,4,6,7,5,8,9,0]);