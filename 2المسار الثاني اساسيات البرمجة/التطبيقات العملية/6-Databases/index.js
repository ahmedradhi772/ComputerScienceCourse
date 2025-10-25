//file System قراءة الملفات عن طريق الوحدة

//const fs = require("fs");
/*fs.readFile("./messages.txt", "utf8", (error, data) => { // معاملات الاستجابه عند قراءة الملفات
    if(error) console.log(error);
    else{
        // هنا يتم تحويل السلسلة النصية إلى مصفوفة
        const messages = data.split(","); 
        console.log(messages);
    } 
});*/

//file System الكتابة على الملفات عن طريق الوحدة
/*
let content = "Hell world";
fs.writeFile("./new.txt", content, "utf8", error =>{
    if(error) console.log(error)
    else console.log("file written!")
})
*/
// كتابة مصفوفة في ملف مع ربطها كسلسلة نصية واحدة
/*
const fs = require("fs");
const names = ["Ahmed", "radhi", "Anas", "radmi"]
const content = names.join(",")
fs.writeFile("./new.txt", content, "utf8", error =>{
    if(error) console.log(error)
    else console.log("file written!")
})
*/
// اضافة نص للمف نصي بدون استبدال الملف السابق
/*
const fs = require("fs");
const names = ["Ahmed", "radhi", "Anas", "radmi"]
const content = names.join(",")
fs.appendFile("./new.txt", content, "utf8", error =>{
    if(error) console.log(error)
    else console.log("file written!")
})
*/

/*const fs = require("fs");
fs.rename("./messages.txt","msgs.txt", error => {
    if(error) console.log(error);
    else console.log("Renamed.")
});*/

/*
const fs = require("fs");
fs.unlink("msgs.txt", error => {
    if(error) console.log(error);
    else console.log("deleted.")
});*/

//07. الإدخال والإخراج I/O

/*const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("whats your name?", answer => {
    console.log("hello:",answer)
    rl.close();
});*/














