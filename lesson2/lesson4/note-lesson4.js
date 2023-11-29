//console.log("lesson4");
// let a = 5;
// if (a==6){   // vua so sanh du lieu ( ==: bang tuowng doi, === bang tuyet doi)
//     console.log("Equal 6");
// }
// else if(a==4){
//     console.log("Equal 4");
// }
// else {
//     console.log("Not Equal");
// }

// ex
// dayIndex 0 ->6
// result string like 
// function getDayOfWeek(dayIndex){    // nên hỏi cách name func sẽ ntn
//     if (dayIndex === 0) {
//         return 'Sunday';
//     } else if (dayIndex === 1) {
//         return 'Monday';
//     } else if (dayIndex === 2) {
//         return 'Tuesday';
//     } else if (dayIndex === 3) {
//         return 'Wednesday';
//     } else if (dayIndex === 4) {
//         return 'Thursday';
//     } else if (dayIndex === 5) {
//         return 'Friday';
//     } else if (dayIndex === 6) {
//         return 'Saturday';
//     } else {
//         return 'Invalid day';
//     }
// }
// console.log(getDayOfWeek(0));
// console.log(getDayOfWeek(1));
// console.log(getDayOfWeek(2));
// console.log(getDayOfWeek(3));
// console.log(getDayOfWeek(4));
// console.log(getDayOfWeek(5));
// console.log(getDayOfWeek(6));

// nếu If là false , undefined, null, 0, NaN, the empty string ("")
// if(null){
//     console.log("haha")
// }else{
//     console.log("hihi")
// }

// Cho nay dang bị sai
// function add(a, b){
//     if (a!= undefined && b!= undefined && a!=null && b!=null && typeof a == "number" && typeof b == "number" )
//     return a+b;
//     }else{
//     return null;
// }
// }
//
// let a = 0;
// function learnSwitch(a){
//     switch(a){
//         case 0:
//             console.log("so 0");
//             break;
//             case "b":
//                 console.log("so1")
//                 break;
//             // case{}: // khong hieu vowi obj
//             // console.log("object rong")
//             // break;
//             default:
//                 console.log("haha");
//     }
// }
// learnSwitch({});


// function getDayOfWeek(dayIndex) {
//     switch (dayIndex) {
//         case 0:
//             return 'Sunday';
//         case 1:
//             return 'Monday';
//         case 2:
//             return 'Tuesday';
//         case 3:
//             return 'Wednesday';
//         case 4:
//             return 'Thursday';
//         case 5:
//             return 'Friday';
//         case 6:
//             return 'Saturday';
//         default:
//             return 'Invalid day';
//     }
// }

// console.log(getDayOfWeek(0));
// console.log(getDayOfWeek(1));
// console.log(getDayOfWeek(2));
// console.log(getDayOfWeek(3));
// console.log(getDayOfWeek(4));
// console.log(getDayOfWeek(5));
// console.log(getDayOfWeek(6));
//
//
// let a = 0;
// function learnSwitch(a){
//     switch(a){
//         case 0:
//             console.log("so 0");
//             break;
//             case 1:
//             case 2:
//                 console.log("so1")
//                 break;
//             default:
//                 console.log("haha");
//     }
// }
// learnSwitch(1, 2);

// function add(a, b){
//     if (typeof a != 'number' || typeof b!= "number"){
// throw "Invalid input";
//     }
// ......
// } try - catch () of me
// function divide(a, b) {
//     try {
//         if (b === 0) {
//             throw new Error("Cannot divide by zero");
//         }

//         return a / b;
//     } catch (error) {
//         console.error("Error:", error.message);
        
//     }
// }
// of Tan
function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw "Invalid data";
    }
    return a / b;
}
try {
    console.log(divide(null, 2));
} catch (error) {
    throw new Error("Invalid data 2");
}finally{
    console.log("finally");
}