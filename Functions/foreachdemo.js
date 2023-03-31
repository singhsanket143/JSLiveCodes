function myMap(array, fn) { // does mymap qualifies for a HOF ? Yes
    /**
     * array -> an array to be processed
     * fn -> function which is exepected to be called on every element of the array
     */
    let result = [];
    for(let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        let output = fn(currentElement);
        result.push(output);
    }

    return result;
}


let arr = [1,2,3,4,5];
function cube(x) {
    return x*x*x
}

console.log(myMap(arr, cube));