// الدوال
// مثال على دالة بدون معامل
/*
function hello(){
    let name = "mohmmad"
    console.log("hello", name)
}
hello();
*/
// مثال اخر على دالة بدون معامل
/*
function filterArray(){
    let data = ["Ahmed", 2, "mohmmad", 4, "Anas", 5]
    for(item of data){
        if(typeof(item)  === 'string'){
            console.log(item)
        } 
    }

}
filterArray();
*/
// الدالة مع وجود المعاملات
/*function hello(name){
    console.log("hello", name)
}
hello("mohmmad");
*/
//return ارجاع القيم الى الدالة باستخدام الكلمة المحجوز 
/*
function sum(x, y){
    return x + y
}
let result = sum(1, 9);
console.log(result)
*/
// استخدام المعاملات في دالة تصفية المصفوفة
/*
function filterArray(array, type){
    for(item of array){
        if(typeof item === type){
            console.log(item)
        } 
    }
}
filterArray(["Ahmed", 2, "Fatima", 3, "Mohamed", true, "Zainab"], "string");
*/
// المعاملات الإفتراضية 
/*
function sum(x, y = 9){
    return x + y
}
let result = sum(1);
console.log(result)
*/
//arguments جمع أكثر من معامل باستخدام خاصية
/*
function sum(){
    let total = 0;

    for(item of arguments){
        total += item
    }
    // لمعرفة ليش استخدام الحلقات لمعرفة وسائط الدالةconsole.log(arguments)
    return total
    
}
let result = sum(1, 2, 3, 4, 5, 6, 7, 8);
console.log(result)
*/
// هذه الطريقة أفضل اذا اردنا انستخدم اكثر من معاملين
/*
function sum(...args){//args الاسم هنا اختياري  
    let total = 0;

    for(item of args){
        total += item
    }
    // لمعرفة ليش استخدام الحلقات لمعرفة وسائط الدالةconsole.log(arguments)
    return total
    
}
let result = sum(1, 2, 3, 4, 5, 6, 7, 8);
console.log(result)
*/
// الفرقة بين المعامل ارقس وارقمنتس هو أنه يمكننا اضافة معاملات اخرى في الدالة مثلا
/*
function sum(multiply,...args){
    let total = 0;

    for(item of args){
        total += item
    }
    // لمعرفة ليش استخدام الحلقات لمعرفة وسائط الدالةconsole.log(arguments)
    return total * multiply
    
}
let result = sum(2,1, 2, 3, 4, 5, 6, 7, 8);
console.log(result)
*/

// المجالات 
//Global المجال العام هي المتغيرات والتوابع والكائنات داخل المستند الذي فيه الشيفرات
//local المجال الخاص أو المحلي هي الشيفرات المكتوبة داخل الأقواس المجعدة سواءا كائنات أو توابع أو متغيرات أو 
// يكمن طباعة قيم المتغيرات العامة في المجال الخاص لكن لايمكن العكس
// أهمية المجال تكمن في حماية البرامج والتطبيقات

//Declaration,Expressions 09. التصريح  والتعبير  عن الدوال

//Declarationالتصريح
/*
start("قبل التصريح عن الدالة") // تقوم جافا سكريبت عند تعريف دالة بطريفة التصريح برفعها في كامل المستند بحيث تكون دالة عامة بعكس طريقة التعبير
function start(name){
    console.log("start", name)
}
start("بعد التصريح عن الدالة")

//Expressions التعبير
//stop() سيظر خطأ بس استدعاء الدالة قبل التعبير
let stop = function(){
    console.log("stop")
}
stop()
*/

//let,var 10. الفرق بين 
//var في فار يتم رفع كل التعابير البرمجية لأعلى مجالها الخاص اذا كانت داخل أقواس مجعد أو لأعلى مجالها العام اذا كانت التعابير خارج الأقواس
/*
console.log(myname)
var myname = "Ahmed" 
console.log(myname)

//console.log(name + "radhi") سيظهر خطأ
let myNeme = "mohmmed" 
console.log(myNeme)
*/

//prime numbers 11. تمرين: الأعداد الأولية
// هي الأعداد الصحيحة الموجبة وتكون أكبر من الواحد وتقبل القمسة على عددين فقط وهما العدد نفسه وواحد دون ان يبقى باقي 
// تعريف اخر العدد الأولي هو عدد صحيح موجب أكبر من الواحد، وليس له أي قواسم موجبة سوى الواحد ونفسه.
/*
function isPrime(num) {
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false // تتحقق اذا يوجد قاسم مشترك غير الواحد والعدد نفسه
    }
    return num > 1;  
}

function primes(max){
    for(let i = 2; i < max; i++) {
        if(isPrime(i)) console.log(i)
    }
}
let number = prompt("Please enter a number")
primes(number)

*/




