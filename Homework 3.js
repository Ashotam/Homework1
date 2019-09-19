//1Write a function, which receives an array as an argument which elements arrays of numbers. Find biggest negative number of each array. Return product of that numbers.If there is not any negative number in an array, ignore that one. Check that items of the given array are arrays.
function calcArr(arr){

    if(arr.some(item=>Array.isArray(item)==false)){
        return "Invalid Argument"
    }
    let newArr = arr.map((item) => item.filter(elem => elem <0).sort(function(a,b){
        return a-b
    }));
    let new2Arr = newArr.filter(item=>item.length > 0);
    if(new2Arr.length==0){
        return "No negatives"
    }
    if(new2Arr.length == 1){
        return "only in one array have negative"
    }

    let sum =  new2Arr.reduce((accumulator,currentValue)=>{
        return accumulator * currentValue[currentValue.length-1]

    },1);
    return sum
}
console.log(calcArr([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]])
);

// 2 Given an array of strings and numbers. Print the number of integers and the numberof strings in the array.
function checkArr(arr){
    let numbers =0;
    let strings =0;
    for (let i =0; i<arr.length; i++){
        if(typeof(arr[i])==="number"){
            numbers ++;
        }
        else strings ++

    }

    return`Numbers:${numbers}, Strings:${strings}`
}
console.log(checkArr([1, 4, 'i am a string', '456']));
// 3 Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array.
function calcArr(arr){
    const newArray = arr.map(item => item.reduce((acc,elem)=>acc+elem));
    return newArray
}
console.log(calcArr([[1], [2], [3], [4]]));
//4 Given an array of integers. Write a function that return new array from first array, where  removed even numbers, and odd numbers was multiplied with new array length

function calcArr(arr){
    let onlyAdd = arr.filter(item =>(item % 2 !== 0))
    let onlyAddLength = onlyAdd.length
    let answer = onlyAdd.map(item => item * onlyAddLength)
    return answer;
}
console.log(calcArr([5, 4, 78, 0, -3, 7]));


// 5 Given an array of numbers. Create an array containing only elements once.
function calcArr(arr){
    answer = arr.filter((item,index)=> arr.indexOf(item)==index);
    return answer
}
console.log(calcArr([4, 4]));
// 6 Given an array. Create the array which elements are products between two neighbours.

function calcArr(arr){

    let newArr = arr.map((item,index) => item * arr[index+1] );
    answer = newArr.slice(0,length-1);
    return answer
}
console.log(calcArr([3, 7, 12, 5, 20, 0]));
 // 7 Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.
function invertor(obj){
    let newObj = {};
    let arr = []
    for(let key in obj){
        if(newObj.hasOwnProperty(obj[key])){
            if(!Array.isArray(newObj[obj[key]])){
                newObj[obj[key]] = [newObj[obj[key]]]
            }
            newObj[obj[key]].push(key)
        }
        else newObj[obj[key]] = key;
    }


    return newObj
}

console.log(invertor({ a: '1', b: '2',c:2,d:2 }));

//8 Given an object. Write a function that creates a deep copy of it.

function deepCopy(obj){
    let newObj = {};

    for (let key in obj) {
        let v = obj[key];

        if(typeof(v)=="object") {
            newObj[key] = deepCopy(v);
        }
        else  newObj[key] = v;
    }

    return newObj
}


console.log(deepCopy({a:5,b:6,c:{k:5,j:4},d:{i:{h:{o:9}}}}));
