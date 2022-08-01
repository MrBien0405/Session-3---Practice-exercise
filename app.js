//Bài 1: prompt nhập 1 số n. kiểm tra 1 số đó có phải là số nguyên hay ko. Tính kết quả biểu thức A
// let n = Number(prompt("nhập số n vào đây"));
// let a = 0
// if(Number.isInteger(n) && n > 0)  {
//     for(let i = 1; i <= n; i = i +1){
//         a = a + i
//     }alert(`A = ${a}`)
// }else{
//     alert("Bạn nhập thông tin không hợp lệ")
// }
//
//
//Bài 2: prompt nhập vào 1 số n. test đó có phải là 1 số nguyên hợp lệ hay ko. Tính kết quả biểu thức B
// let n = Number(prompt("nhập số n vào đây"));
// let a = 1
// if(Number.isInteger(n) && n > 0){
//     for(i = 1; i <= n; i = i +1){
//         a = a * i
// }alert(` B = ${a}`)
// }else{
//     alert("Bạn nhập sai thông tin")
// }
//
//
//Bài 3: prompt nhập số n vào. tiến hình kiểm tra xwem có phải là 1 số nguyên hợp lệ ko. Tính kết quả biểu thức C
// let n = Number(prompt("nhập số n vào đây"));
// let a = 1
// if(Number.isInteger(n) && n > 0){
//     for(i = 1; i <= n; i = i + 1){
//     a = a + 1 / i
// }alert(`C = ${a}`)
// }else{alert("Bạn nhập sai thông tin")}
// //
//
//Bài 4:prompt nhập só n vào. kiểm tra có là số nguyên ko. tính biểu thức
// let a = 0.5 
// let n = Number(prompt("nhập số n vào"));
// if(Number.isInteger(n) && n >= 0){
//     for(i = 3; i <= n; i = i + 1){
//         a = a + (1/(i - 1)) * ( 1/ i)
//     }alert(`D = ${a}`)
// }else{alert("Bạn nhập sai thông tin")}
//
//
//Bài 5: prompt nhập 1 số n có là số nguyên hay ko. In ra bảng cửu chương
// let n = Number(prompt("nhập số n vào đây"));
// if(Number.isInteger(n) && n >= 0) {
//     for(i = 1; i <= 10; i = i +1 ){
//         a = n * i
//         console.log(`${n} * ${i} = ${a}`)}
// }else{console.log("Bạn nhập sai thông tin")}
// 
//
//Bai 6: prompt nhập vào 1 số n. test kiểm tra xem số đó có hợp lệ hay ko. in console fibonacci
// let n = Number(prompt("nhập số n vào đây"))
// let a = 0;
// let b = 1;
// if(Number.isInteger(n) && n >= 0){
//     for(let i = 1; i <= n; i = i +1){
//     console.log(a);
//     tong = a + b;
//     a = b;
//     b = tong;
//     }
// }
// Bài 7: prompt nhập 1 số nguyên dương n. test số đó hợp lệ hay ko. nếu hợp lệ in ra màn hình dạng chẵn lẻ.
// let n = Number(prompt("nhập số nguyên dương n "))
// if( Number.isInteger(n) && n >= 0 ) {
//     for(i = 0; i <= n; i = i + 1){
//         if( i % 2 == 0){
//             console.log(`${i} - chẵn`);
//         }else{
//             console.log(`${i} - lẻ`);
//         }
//     }
// }else{ alert(" bạn nhập sai thông tin")}
//
//
//Bài 8: prompt nhập số nguyên dương n. test số đó hợp lệ hay không. in ra màn hình các sô chẵn trước các số lẻ sau
// let n = Number(prompt("nhập số nguyên dương n"))
// if(Number.isInteger(n) && n >= 0)  {
//     for(i = 0; i <= n; i = i + 1){
//         if( i % 2 == 0){
//             console.log(`${i}`)}
//         }
//     for(i = 1; i <= n; i = i +1){
//         if(i % 2 != 0){
//             console.log(`${i}`);
//         }
//     }    
//     } 
//
//
// Bài 9: prompt nhập số nguyên dương n. test có hợp lệ hay ko. test số đó có phải là số nguyên tố ko và in ra màn hình
// let n = Number(prompt("nhập số n vào đây"))
// if(Number.isInteger(n) && n >= 0){
//     if(n < 2){
//         alert(`${n} không phải là số nguyên tố`)
//     }for(i = 2; i <= n - 1; i= i + 1){
//         if(n % i == 0){
//             alert(`${n} không là số nguyên tố`)
//         }else(alert(`${n} là số nguyên tố`))
//     }
// }
//
//
// Bài 10: prompt nhập 1 số nguyên dương n. test đó có phải là 1 số hợp lệ ko. in ra màn hình 1 tam giác vuông
//10.a
// let n = Number(prompt("nhập số nguyên dương n"))
// if(Number.isInteger(n) && n > 0)  {
//     for(i = 1; i <= n; i = i + 1){
//     for(j = 1; j <= i; j = j + 1){
//         document.writeln(" * ")
//     }
//         document.writeln("<br/>")
//     }
// }    
//10.b
// let n = Number(prompt("nhập số nguyên dương n"))
// if(Number.isInteger(n) && n > 0)  {
//     for(i = n; i >= 1; i = i - 1){
//     for(j = 1; j <= i; j = j + 1){
//         document.writeln(" * ")
//     }
//         document.writeln("<br/>")
//     }
// }
//10.c
// let n = Number(prompt("nhập số nguyên dương n"))
// if(Number.isInteger(n) && n > 0)  {
//     for(i = 1; i <= n; i = i + 1){
//     for(j = 1; j <= i; j = j + 1){
//         document.writeln(j)
//     }
//         document.writeln("<br/>")
//     }
// }  
//10.d
let n = Number(prompt("nhập số nguyên dương n"))
if(Number.isInteger(n) && n > 0)  {
    for(i = n; i >= 1; i = i - 1){
    for(j = 1; j <= i; j = j + 1){
        document.writeln(i)
    }
        document.writeln("<br/>")
    }
}  
//EX11: 