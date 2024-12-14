// REST PARAMETER
function test(callback,...arr){
 callback(arr);
}
function add(arr){
    let sum=0;
    for(var i=0;i<=arr.length-1;i++){
        sum=sum+arr[i];
    }
    console.log(`sum=${sum}`);
    
}
test(add,1,2,3,4,5);
