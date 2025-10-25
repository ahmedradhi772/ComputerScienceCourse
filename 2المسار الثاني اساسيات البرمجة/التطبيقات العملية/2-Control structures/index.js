
// التحقق من درجة الأختبار باستخدام if else
/*    
let re = 1
let mark = 90
if (mark >= 90){
    console.log("ممتاز")
} 

else if(mark >= 80){
    console.log("جيدحدا")
} 

else if(mark >= 70){
    console.log("جيد")
} 

else if (mark >= 50){
    console.log("مقبول")
}

else if (mark >= 0) {
    console.log("راسب")
    if (re > 0) console.log("للأسف لايمكنك اعادة الاختبار")
}

else {
      console.log("القيمة خاطئة")
} 
*/

// التحقق من علامة الأختبار الطريقة الثانية
/*
let score = 90
if (score >= 90 && score <=100){
    console.log("ممتاز")
} 

if (score >= 80 && score <=89){
    console.log("جيدحدا")
} 

if (score >= 70 && score <=79){
    console.log("جيد")
} 

if (score >= 50 && score <=69){
    console.log("مقبول")
}

if (score >= 0 && score <=50) {
    console.log("راسب")
}

if (score > 100 || score < 0 ){
    console.log("القيمة خاطئة")
}
*/
// التحقق من علامة الأختبار باستخدام العامل الثلاثي
/*let mark = 50

let result = mark >= 50 ? "ناجح" : "راسب"
console.log(result)*/

// التحقق من اختبار رخصة القيادة باستخدام عامل ثلاثي داخله عامل اخر
/*let age = 16
let mark = 50
let result = age >= 16 ? (mark >= 50 ? "نجحت في اختبار القيادة" : "للأسف لم تنجح في اختبار القيادة بسبب درجتك")  : "للأسف لم تنجح اختبار القيادة بسبب عمرك";
console.log(result)*/

//swith أو مايعرف بالمبدل نعمل برنامج عندما نختار رقم يتحول الى يوم ما
/*let day = 7
switch(day){
    case 1:
        console.log("السبت")
    break;

    case 2:
        console.log("الأحد")
    break;

    case 3:
        console.log("الأثنين")
    break;

    case 4:
        console.log("الثلاثاء")
    break;

    case 5:
        console.log("الأربعاء")
    break;

    case 6:
        console.log("الخميس")
    break;

    case 7:
        console.log("الجمعة")
    break;

    default:
        console.log("هذه القيمة لاتعبر عن يوم الرجاء ادخال رقم من واحد الى سبعة لكي يعمل البرنامج")
    break;
    
}*/

//else if نفس البرنامج السابق لكن باستخدام
/*let day = 8
if(day === 1) console.log("السبت")
else if(day === 2) console.log("الأحد")
else if(day === 3) console.log("الأثنين")
else if(day === 4) console.log("الثلاثاء")
else if(day === 5) console.log("الأربعاء")
else if(day === 6) console.log("الخميس")
else if(day === 7) console.log("الجمعة")
else console.log("هذه القيمة لاتعبر عن يوم الرجاء ادخال رقم من واحد الى سبعة لكي يعمل البرنامج")*/


//for حلقة
// اطبع الأعدد من واحد الى عشرة
/*for (let i = 1; i <= 10; i++){
    console.log(i)
}*/

// اطبع الأعدد الزوجية من واحد الى عشرة
/*for (let i = 1; i <= 10; i++){
    if(i % 2 === 0)console.log(i)
}*/

// اطبع جدول الضرب للرقم ما
/*num = 5
for(let i = 1; i <=12; i++) console.log(num, "*", i, "=", num*i)
*/

//اطبع الأرقام من واحد الى ثلاثة ثلاث مرات
/*for(let i = 1; i <=3; i++){
    for(let j = 1; j <=3; j++) console.log(j)
}*/

//while حلقة وايل
// اطبع الاعداد من واحد الى عشرة 
/*let num = 1;
while(num <= 10){
    console.log(num)
    num++;
}*/


// اطبع الاعداد الزوجية باستخدام حلقة وايل
/*
let num = 1;
while(num <= 10){
    if(num % 2 == 0)console.log(num)
    num++;
}
*/
// طباعة جدول الضرب للرقم ما
/*
let num = 5;
let i = 1;
while(i <= 12){
    console.log(num, "*", i,"=",num * i)
    i++;
}
*/

//do,while اطبع الاعداد الزوجية باستخدام حلقة 

/*let num = 1;
do{
    if(num % 2 == 0)console.log(num)
    num++;
}while(num <= 10)*/

//do,while اطبع الارقام اذا تحقق الشرط واذا لم يتحقق اطبع او رقم بس
/*let num = 12; // الفرق بين وايل و دو وايل انها تنفذ ثم تحقق من الشرط
do{
    console.log(num)
    num++;
}while(num < 11)*/

// المرو على عناصر المصفوفات باستخدام الحلقات
/*const names = ["Ahmed", "Fatima", "Mohammed", "Layla", "Omar", "Sara", "Ali", "Nour", "Khaled", "Aisha"];
for(let i = 0; i < names.length; i++){
    console.log(i)
}*/



//for  المرور على عناصر المصفوفة باستخدام الحلقة 

/*let names = ["Ahmed", "Fatima", "Mohamed", "Zainab"];
for(let i = 0; i < names.length; i++){
    console.log(i, names[i])
}*/

//while  المرور على عناصر المصفوفة باستخدام الحلقة 
/*
let names = ["Ahmed", "Fatima", "Mohamed", "Zainab"];
let i = 0;
while( i < names.length){
    console.log(i, names[i])
    i++;
}
//for المرور على عناصر المصفوفة بشكل عكسي باستخدام الحلقة
/*
let names = ["Ahmed", "Fatima", "Mohamed", "Zainab"];
for(let i = names.length ;i > 0; i--){
    console.log((i - 1), names[(i - 1)])
}
*/
//while المرور على عناصر المصفوفة بشكل عكسي باستخدام الحلقة
/*
let names = ["Ahmed", "Fatima", "Mohamed", "Zainab"];
let i = names.length - 1
while( i >= 0){
    console.log((i), names[i])
    i--;
}
*/

//for..in حلقات العبور 
/*
let names = ["Ahmed", "Fatima", "Mohamed", "Zainab"];
for(let index in names){
    console.log(index, names[index])
}
*/
//for of حلقة العبور على الخاصيات
/*
let names = ["Ahmed", "Fatima", "Mohamed", "Zainab"];
for(let name of names){
    console.log(name)
}
*/
//continue, break التوقف والمتابعة
// continue
/*
let i = 0;
while(i < 10){
    i++;
    if (i === 3) continue;
    console.log(i)
}
*/
//continue طباعة الأعداد الزوجية باستخدام
/*
let i = 0;
while(i < 10){
    i++;
    if (i % 2 !==0 ) continue;
    console.log(i)
}
*/
//break
/*
let i = 0;
while(i < 10){
    i++;
    if (i === 3) breaks;
    console.log(i)
}
*/

//for of تمرين جمع عناصر المصوفة بشكل تراكمي باستخدام
/*
number = [1, 55, 99, 11, 15, 9]
total = 0;
for(num of number){
    total += num
}
console.log(total)
*/
//for تمرين جمع عناصر المصوفة بشكل تراكمي باستخدام
/*
number = [1, 55, 99, 11, 15, 9, 10]
total = 0;
for(let i = 0; i < number.length; i++){
    total += number[i]
}
console.log(total)
*/
//while تمرين جمع عناصر المصوفة بشكل تراكمي باستخدام
/*
number = [1, 55, 99, 11, 15, 9, 10]
total = 0;
let i = 0;
while (i < number.length){
    total += number[i]
    i++
}
console.log(total)
*/
/*
// تمرين استخراج العناصر النصية من مصفوفة منوعة القيم
let mixedArray = [10, true, "Hello", false, 3.14, "World", 100, true];
for(let i = 0; i < mixedArray.length; i++){
    if(typeof mixedArray[i] === "string") console.log(mixedArray[i])
}
*/


/*let rows = prompt("ادخل عدد الأسطر: ")
for(row = 1; row <= rows; row++){
    let stars = ''
    for(let i = 1; i <= row; i++){
        stars = stars + "*"
    } 
    console.log(stars)
}*/

