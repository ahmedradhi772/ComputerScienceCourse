// إضافة العناصر في المصفوفة
/*
numbers = [1, 2, 3]
numbers[numbers.length] = 4 // اضافة الى اخر المصفوفة
numbers.push(5) // اضافة الى اخر المصفوفة
numbers.unshift(0) // اضافة الى أول المصفوفة
numbers.splice(2, 0, "Ahmed") // اضافة لاي مكان في المصفوفة الوسيط الأول يعبر عن موقع الاضافة الوسيط الثاني يعبر عدد العناصر التي تريد حذفها بعد العنصر المضاف
console.log(numbers)
*/
// حذف العناصر من المصفوفة
// حذف عنصر من اخر المصفوفة
/*
numbers2 = [1, 2, 3, 4, 5]
let last = numbers2.pop();
console.log(last)
console.log(numbers2)
*/
// حذف عنصر من أول المصفوفة
/*
numbers3 = [1, 2, 3, 4, 5]
let first = numbers3.shift();
console.log(first)
console.log(numbers3)
*/
// حذف عناصر من اي مكان من المصفوفة
/*
numbers4 = [1, 2, 3, 4, 5]
let deleted = numbers4.splice(1, 1);
console.log(deleted)
console.log(numbers4)
*/
// افراغ المصفوفة في حالة لاتوجد لها مرجعيا
/*
let ProgrammingLanguages = ["Python", "JavaScript", "Java", "C#", "C++"];
// let Languages = ProgrammingLanguages // هذا السطر يقصد به بالمرجعية يعني متغيراخر قيمة نفس المصفوفة فعندما نطبع المرجعية لاتفرغ المصفوفة
ProgrammingLanguages = []
console.log(ProgrammingLanguages)
console.log(Languages)
*/
// افراغ المصفوفة في حالة توجد لها مرجعيا
/*
let ProgrammingLanguages = ["Python", "JavaScript", "Java", "C#", "C++"];
let Languages = ProgrammingLanguages
ProgrammingLanguages.length = 0
console.log(ProgrammingLanguages)
console.log(Languages)
*/
// عكس عناصر المصفوفة
/*
let numbers = [1, 2, 3,  4, 5, 6, 7, 8]
function reverse(array){
    let reverseArray = []
    for(let item of array){
        reverseArray.unshift(item)
    }
    return reverseArray
}
let Reverse = reverse(numbers)
console.log(Reverse)
*/

// عكس عناصر المصفوفة بدون الإضافة لمجموعة اخرى
// الطريقة الأولى
/*
let numbers = [1, 2, 3,  4, 5, 6, 7, 8]
numbers.reverse(); 
console.log(numbers);
*/
// طريقة أخرى
/*
let numbers = [1, 2, 3,  4, 5, 6, 7, 8]
function reverse(array){
    for(let i in array){
        array.splice(i, 0, array.pop())
    }
    return array
}
let Reverse = reverse(numbers)
console.log(Reverse)
*/
// البحث عن العناصر
// let numbers = [1, 2, 3,  4, 5, 6, 7, 8] 
//console.log(numbers.includes(11)) // هذا التابع يرجع صح أو خطأ
// console.log(numbers.indexOf(8)) // هذا التابع يرجع واحد أو سالب واحد
// التابع فايند يقوم بايجاد أول عنصر في مصفوفة على حسب الشرط المحدد في الدالة
/*
let result = numbers.find(function(number){
    return number > 3
})
console.log(result)
*/
// التابع فلتر يقوم بايجاد العناصر في مصفوفة على حسب الشرط المحدد في الدالة
/*
let result = numbers.filter(function(number){
    return number > 3
})
console.log(result)
*/
//findIndexيقوم هذا التابع بايجاد رقم خانة أول عنصر في مصفوفة على حسب الشرط المحدد في الدالة
/*
let result = numbers.findIndex(function(number){
    return number > 3
})
console.log(result)
*/

// الدوال السهمية
//Parameter => {جسم الدالة} هيكلة الدالة السهمية
/*
function Hello(msg){
    console.log(msg)
}
Hello("hello")
*/
// حولها الى دالة سهمية
/*
let Hello = msg => {console.log(msg)}
Hello("hello")
*/
// الدالة فلتر بطريقة الدوال السهمية
/*

let numbers = [1, 2, 3,  4, 5, 6, 7, 8]

let result = numbers.filter(number => {return number > 3}) 
    
console.log(result)
*/
// بماإن كتلة الدالة عبارة عن سطر واحد يمكن كتابتها كهذا
/*
let numbers = [1, 2, 3,  4, 5, 6, 7, 8]
let result = numbers.filter(number => number > 3) 
console.log(result)
*/
// forEach()هذا التابع يأخذ وسيط دالة لها معاملين القيمة ورقم الخانة

/*let ProgrammingLanguages = ["Python", "JavaScript", "Java", "C#", "C++"];
ProgrammingLanguages.forEach(function(value, index){
    console.log(value, index)
})*/


// forEach() استخدام هذا التابع بجعل الوسيط دالة سهمية
/*
let ProgrammingLanguages = ["Python", "JavaScript", "Java", "C#", "C++"];
ProgrammingLanguages.forEach((value, index) => {console.log(value, "=", index)})
*/

// ترتيب عناصر المصفوفات
//sort() اذا كانت المصفوفة ارقام فقط من واحد الى 9  وتريد ترتيبها من الأصغر الى الأكبر نستخدم هذا التابع 

/*numbers = [2, 1, 4, 3]
numbers.sort()
console.log(numbers)*/

// عندما نستخدم هذا الوسيط تكون عملية المقارنة صحيح في كل الأرقام
/*numbers2 = [5 ,2, 1, 18, 15, 3]
numbers2.sort((a, b) => a - b)
console.log(numbers2)*/
// عمل الدالة كالاتي اذا كانت القيمة المرجعة للدالة موجبة قم بالتبديل اما اذا كانت صفر او سالبة لاتقم بالتبديل هذا العملية تتكرر حتى تكون المصفوفة مرتبة بشكل الصحيح
/*numbers3 = [5 ,2, 1, 18, 15, 3, 4]
numbers3.sort(function(a, b){
    return a - b
})
console.log(numbers3)*/
