// حل الشخصي


/*let numbers = [7, 6, 5, 4, 3, 2, 1]
numbers.sort((a, b) => a - b)
console.log(numbers)

let numbers2 = [7, 6, 5, 4, 3, 2, 1]
numbers.sort(function(a,b){
    return b - a
})
console.log(numbers)*/



// حل المدرب
/*function bubbleSort(array){
    let swapped;
    do{
        swapped = false;
        for(let i = 0;  i < array.length; i++){

            if (array[i] > array[i+1]){
                let tmp = array[i]
                array[i] = array[i+1]
                array[i + 1] = tmp
                swapped = true;
            }
        }

    } while(swapped)
    return array
 
}

result = bubbleSort([8,7, 6, 5, 4, 3, 2, 1])
console.log(result)*/


Name = []
if (typeof(Name) !== undefined) {
  console.log(Name);
}