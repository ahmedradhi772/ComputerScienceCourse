/*
//student تسمى هذه الطريقة بالتغليف نحن اغلفنا المتغيرات الاسم والعمر والمستوى بالكائن 
let student = {
    name: "Ahmed",
    age: 12,
    level: 7
};
console.log(student)
// للوصول للخواص الكائنات هناك طريقتين
// 1- Dot Notation
console.log(student.name)

// 2- Bracket Notation
console.log(student["age"])

// يمكن تغير قيمة الخواص بالإسناد
console.log(student.level)
student.level = 8
console.log(student.level)
*/

// التوابع أو الأكشن في الكائنات
/*
let student = {
    name: "Ahmed",
    age: 12,
    level: 7,
    hello: function(){
        console.log(this.name, this.age)
    },

    pass: function(){
        this.age++;
        this.level++;
    }
};

student.hello();  // هذه الدوال تعتبر معنى من معاني التجريد في البرمجة الكائنية التوجه بسبب تبسيط فعل طباعة الاسم والعمر بشيفرة اصغر وفي التطبيقات الحقيقة بتكون مبسطة بالواجهة الرسومية مثل زر الاتصال في الهاتف 
student.pass();
console.log(student.age, student.level)
console.log(student)
*/
/*
//Constructor التابع الباني
function Student(name, age, level){
    this.name = name;
    this.age = age;
    this.level = level;
    this.hello = function(){console.log(this.name, this.age)}
    this.pass = function(){this.age++, this.level++}
}

let student = new Student("Ahmed", 15, 9)
console.log(student);
student.hello();

let student2 = new Student("mohmmad", 12, 7)
console.log(student2);
student2.hello();

// مصفوفة من الكائنات
let students = [
    new Student("Aans", 16, 9),
    new Student("shima", 18, 12)
]
console.log(students);
console.log(students[0]);
console.log(students[1].age);
*/

//Date كائن التاريخ
/*
let date = new Date();
console.log(date)

let myDate = new Date(2001, 4, 2, 4, 30, 0);
console.log(myDate)

let myDate2 = new Date("2001-5-2-04:30:00");
console.log(myDate2)
*/
/*
let myDate = new Date("2001-5-2-04:30:00");
let myDate2 = new Date("2001-5-2-04:30:01");
console.log(myDate.getFullYear())
console.log(myDate.getMonth())
console.log(myDate.getDate())
console.log(myDate.getDay())
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getSeconds())
// UNIX Timestamp
console.log(myDate.getTime()) // تحول التاريخ الى رقم
if(myDate.getTime() === myDate2.getTime())console.log("Equal");
else console.log("No Equal")
*/

//Regular Expression التعابير النظامية
let msg = "hello there my name is Ahmed and my age is 18 year"
/*let regex = /name/;
console.log(regex.test(msg))*/

/*let regex2 = /age is [0-9]+/;// يقصد بإشارة الزايد ان الرقم ممكن أن يكون اكثر من خانة 
console.log(regex2.test(msg))*/

/*let regex3 = /name is [a-zA-Z]+/; //name is أن الكلمة بعد لابد تكون احرف  
console.log(regex3.test(msg))*/

/*let regex4 = /name is ([a-zA-z]+)/; //سبب اضافة الاقواس لستخراج النص 
result = regex4.exec(msg) //نحصل على مصفوفة للجملة 
console.log(result[1])*/
/*
try{
    console.log("بدا الأختبار")
    //ahmederrors
    console.log("لاتوجد أخطأء :)")
}catch(error){
    console.log("يوجدخطأ في البرنامج احذر! وهو:", error)
} finally{console.log("انتهى الإختبار")} 
*/
//Error انشاء خطأ خاص بنا عبر انشاء كائن من الصنف     
/function sum(num1, num2){
    if(typeof num1 !== "number") throw new Error("يحب أن يكون المعامل الأول رقما")
    if(typeof num2 !== "number") throw new Error("يحب أن يكون المعامل الثاني رقما")
    return num1 + num2
}
try{
    console.log(sum(1, 9))
    console.log(sum("1", 9))
}catch(error){
    console.log("Opos there is an error which is:", error)
}








