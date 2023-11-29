// while 
// let a = 4;
// while(a>0 && a<5){
//     console.log(" Pam yeu "+a);
//     a--;
// }
//
// function sumOfArray(arr){
// //     if(typeof arr == "arr")
// //     let result = 0;s
// }
// console.log(sumOfArray(arr)); 
// // 
// let arr = [1,2,5,66,77,88];
// function sumOfArray(arr){
//     if (arr instanceof Array){
//         let result =0;
//         let i =0;
//         while(i<arr.length){
//             result += arr[i];
//             i++;
//         }
//         return result;

//     }
// }
// console.log(sumOfArray(arr));
// Viet func nhan vao 1 arr va tra ve 1 arr bao gom cac so chan 
// function getEvenNumbers(arr) {
//     let i = 0;
//     let evenArr = [];
  
//     while (i < arr.length) {
//       if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//       }
//       i++;
//     }
//   do{
//     result += arr[i];
//     i++;

//   }while(i<arr.length);
//   return result;

//     return null;
//   }
  
//   let arr = [1, 2, 5, 66, 77, 88];
//   let result = getEvenNumbers(arr);
//   console.log(result);

// do{
//     console.log("Im here");
// }while(false);
// while(false){
//     console.log("Im herr");
// }

// function findNumber(n){
//     do{
//         if(n%2===0){
//             console.log(n);
//         }
//         n--;
//     }while(n>0)
//     return null;
// }
// console.log(findNumber(10))

// viet function nhan vao so N in ra cac so be hon N va chia het cho 2 va 3
// function sumOfNumber(N) {
//     let sum = 0;
//     let i = 1;
  
//     while (i < N) {
//       if (i % 2 === 0 && i % 3 === 0) {
//         sum += i;
//       }
//       i++;
//     }
  
//     return sum;
//   }
  
//   //
//   let N = 30;
//   let result = sumOfNumber(30);
//   console.log(result);

// Bai cua Dung
// function sumOfNumber(n){
//     let result = 0;
//     do{
//         if(n % 2 == 0 && n % 3 == 0){
//             result += n;
//         }
//         n--;
//     }while(n > 0);
//     return result;
// }
// console.log(sumOfNumber(20));

///// VÒNG LẶP FOR
// let a =[21,3,6456,5,6];
// for(1->khoi taoj, 2-> dieu kien, 4-> thuc hien sau block X){
//     3-> block X
// }
// let a =[21,3,6456,5,6];
// for(let i=0; i<a.length; i++){
//     console.log(a[i]);
// }

// Tinh tong bao toan tren  = for
// function sumOfNumbers(N) {
//     let sum = 0;
//   // thay vi i++
//     for (let i = 1; i < N; i+=3) {
//       if (i % 2 === 0 && i % 3 === 0) {
//         sum += i;
//       }
//     }
  
//     return sum;
//   }
  
//   let N = 30;
//   let result = sumOfNumbers(N);
//   console.log(result);

//dung break;
// let n=20;
// while (n>0){
//     console.log(n);
//     n-=3;
//     if(n%2==0){
//         break;
//     }
// }
//Viet function tim so dau tien chia het cho 5 voi input la 1 arr gom cac so nguyen tra ve so duoc tim thay
// let a =[1,7,2332,76456,324324,55,4324]
// Neu cos return thi se khong co break;
// function findNumber(arr) {
//     let result = null;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 5 === 0) {
//         result = arr[i];
//         break;
//       }
//     }
  
//     return result;
//   }
//   let a = [1, 7, 2332, 76456, 324324, 55, 4324]; 
//   let resultFind = findNumber(a);
//   console.log(resultFind);

// firstFor:for(let i=0; i<5; i++){
//     console.log("i:"+i);
//     secondFor:for(let j =0; j<7; j++){
//         if(j==6){
//            break; 
//         }
//     }
// }
// For in
// let student = {
//     studentName:"Son",
//     age: 20,
//     address: "123ghj"
// }
// for(key in student){
//     console.log('Key: ${key} value: ${student[key]}');
// }





