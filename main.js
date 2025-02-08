//Misol 1

//Misol 2
// let a = +prompt("Son kiriting:");
// if (a % 2 === 0) {
//     a = a + 1;
//     document.write("Juft son: " + a);
// } else {
//     a = a - 1;
//     document.write("Toq son: " + a);
// }

//Misol 3
// let a = +prompt("Son kiriting:");
// if (a % 3 === 0) {
//     document.write("Karrali");
// } else {
//     document.write("Karrali emas");
// }

//Misol 4
// let a = +prompt("A sonni kiriting:");
// let b = +prompt("B sonni kiriting:");
// let number;
// if (a < b) {
//     number = a.toString() + b.toString(); 
// } else {
//     number = b.toString() + a.toString(); 
// }
// document.write("Natija: " + number);

//Misol 5
// let a = +prompt("Son kiriting:");
// if(a >= 0 && a <=  9){
//     document.write(a, "- Bir xonali son")
// }
// else if(a >= 10 && a <= 99){
//     document.write(a, "- Ikki xonali son")
// }
// else if(a >= 100 && a <= 999){
//     document.write(a, "- Uch xonali son")
// }
// else{
//     document.write("Siz kiritgan son 0 dan kichik yoki 4 xonalidir 😊")
// }

//Misol 6
// let a = +prompt("Ixtiyoriy son kiriting:")
// if(a <= 0){
//     document.write("Bu son manfiy son")
// }
// else{
//     document.write("Bu son musbat son")
// }

//Misol 7
// let a = +prompt("Ixtiyoriy son kiriting:");
// if (a < 0) {
//     document.write("Bu son manfiy son. ");
// } else if (a > 0) {
//     document.write("Bu son musbat son. ");
// } else {
//     document.write("Bu son nolga teng. ");
// }
// if (a % 2 === 0 && a !== 0) {
//     document.write("Bu juft son.");
// } else if (a % 2 !== 0) {
//     document.write("Bu toq son.");
// }

//Misol 8
// let a = +prompt("Yoshingizni kiriting:");
// if( a < 0){
//     alert("Unday yosh mavjud emas!")
//     document.write("Bu yosh", + a)
// }
// else if( a <= 1 || a <= 15){
//     alert("Kichik yosh")
//     document.write("Bu yosh", + a)
// }
// else if( a <= 15 || a <= 25){
//     alert("Kichik yosh")
//     document.write("Voyaga yetkan yosh", + a)
// }
// else if( a <= 25 || a <= 40){
//     alert("Kichik yosh")
//     document.write("O'rta yosh", + a)
// }
// else if( a <= 40 || a <= 70){
//     alert("Katta yosh")
//     document.write("Bu yosh", + a)
// }
// else if( a <= 70 || a <= 100){
//     alert("Katta yosh")
//     document.write("Keksa yosh", + a)
// }
// else(
//     document.write("Umringiz uzoq bo'lsin!", + a)
// )

//Misol 9
// let a = +prompt("A sonni kiriting:")
// let b = +prompt("B sonni kiriting:")
// if(a % 3 ===  0){
//     document.write("Ha")
// }
// else if(b % 3 ===  0){
//     document.write("Ha")
// }
// else{
//     document.write("Yo'q")
// }

//Misol 10
// let a = +prompt("A sonni kiriting:");
// let b = +prompt("B sonni kiriting:");
// let c = +prompt("C sonni kiriting:");

// let numbers = [a, b, c]; 
// numbers.sort((x, y) => x - y); 

// let number = numbers.join(""); 
// document.write("Natija: " + number);

//Misol 11
// let a = +prompt("Son kiriting:");
// let qoldiq = a % 2; 
// if (qoldiq % 2 === 0) {
//     document.write("Qoldiq juft son: " + qoldiq);
// } else {
//     document.write("Qoldiq toq son: " + qoldiq);
// }

//IF1
// let a = +prompt("Son kiriting:")
// if (a >= 0){
//     a = a + 1
//     document.write("Bu son:" , a)
// }
// else{
//     document.write("Bu son manfiy son", a)
// }

//IF2
// let a = +prompt("Son kiriting:")
// if (a >= 0){
//     a = a + 1
//     document.write("Bu son:" , a)
// }
// else{
//     a = a - 2
//     document.write("Bu son 2 ga kamaydi", a)
// }

//IF3
// let a = +prompt("Ixtiyoriy son kiriting:");
// if (a > 0) {
//     a = a + 1;
//     document.write("Yangi qiymat: " + a);
// } else if (a < 0) {
//     a = a - 2;
//     document.write("2 ga kamaytirildi: " + a);
// } else if (a === 0) { 
//     a = a + 10
//     document.write("10 ga oshirildi:");
// } else {
//     document.write("Iltimos, faqat son kiriting!");
// }

//IF4
// let a = +prompt("Birinchi sonni kiriting:");
// let b = +prompt("Ikkinchi sonni kiriting:");
// let c = +prompt("Uchinchi sonni kiriting:");
// let count = 0; 
// if (a > 0) count++;
// else if (b > 0) count++;
// else if (c > 0) count++;
// document.write("Musbat sonlar soni: " + count);

//IF5
// let a = +prompt("Birinchi sonni kiriting:");
// let b = +prompt("Ikkinchi sonni kiriting:");
// let c = +prompt("Uchinchi sonni kiriting:");
// let positiveCount = 0; 
// let negativeCount = 0; 
// if (a > 0) {
//     positiveCount++;
// } else if (a < 0) {
//     negativeCount++;
// }
// if (b > 0) {
//     positiveCount++;
// } else if (b < 0) {
//     negativeCount++;
// }
// if (c > 0) {
//     positiveCount++;
// } else if (c < 0) {
//     negativeCount++;
// }
// document.write("Musbat sonlar soni: " + positiveCount + "<br>");
// document.write("Manfiy sonlar soni: " + negativeCount);

//IF6
// let a = +prompt("A sonni kiriting:");
// let b = +prompt("B sonni kiriting:");
// if (a < b) {
//     document.write("A son kichik: " + a);
// } else if (b < a) {
//     document.write("B son kichik: " + b);
// } else {
//     document.write("Ikkala son teng: " + a);
// }

//IF7
// let a = +prompt("A sonni kiriting:");
// let b = +prompt("B sonni kiriting:");

// if (a < b) {
//     document.write(`A son kichik: ${a}, tartib raqami: 1`);
// } else if (b < a) {
//     document.write(`B son kichik: ${b}, tartib raqami: 1`);
// } else {
//     document.write(`Ikkala son teng: ${a}, tartib raqami: 1`);
// }

//IF8
// let a = +prompt("A sonni kiriting:");
// let b = +prompt("B sonni kiriting:");
// let aLength = a.toString().length;
// let bLength = b.toString().length; 
// if (aLength < bLength) {
//     document.write(`Kaltasi: ${a}, tartib raqami: 1 <br>`);
// } else if (bLength < aLength) {
//     document.write(`Kaltasi: ${b}, tartib raqami: 1 <br>`);
// } else {
//     document.write(`Ikkalasi ham bir xil uzunlikda: ${a}, ${b} <br>`);
// }
// if (a < b) {
//     document.write(`Eng kichigi: ${a}, tartib raqami: 2`);
// } else if (b < a) {
//     document.write(`Eng kichigi: ${b}, tartib raqami: 2`);
// } else {
//     document.write(`Ikkalasi ham teng: ${a}`);
// }

//IF9
// let a = +prompt("A sonni kiriting:");
// let b = +prompt("B sonni kiriting:");
// if (a > b) {
//     let c = a;
//     a = b;
//     b = c;
// }
// document.write(`A son (kichigi): ${a}`);
// document.write(`B son (katta): ${b}`);

//IF10
// let a = +prompt("A sonni kiriting:");
// let b = +prompt("B sonni kiriting:");
// let number;
// if (a === b) {
//     document.write(`A va B sonlari bir xil: ${a}`);
// } else {
//     number = a + b;
//     document.write(`Ularning yig'indisi: ${number}`);
// }

//IF11
// let a = +prompt("A sonni kiriting:");
// let b = +prompt("B sonni kiriting:");
// let number;
// if (a === b) {
//     number = 0; 
//     document.write(`A va B sonlari bir xil, number = ${number}`);
// } else {
//     number = Math.max(a, b);
//     document.write(`A va B sonlari har xil, kattasi: ${number}`);
// }

//IF12
// let a = +prompt("A sonni kiriting:");
// let b = +prompt("B sonni kiriting:");
// let d = +prompt("D sonni kiriting:");
// let sonlar = (a + b + d) / 3; 
// let min = Math.min(a, b, d);
// document.write("Kiritilgan sonlar: " + a + ", " + b + ", " + d);
// document.write("Eng kichik son: " + min);

//IF13
// let a = +prompt("A sonni kiriting:");
// let b = +prompt("B sonni kiriting:");
// let d = +prompt("D sonni kiriting:");
// let average = (a + b + d) / 3; 
// let sorted = [a, b, d].sort((x, y) => x - y);
// let middleNumber = sorted[1]; 
// document.write("Kiritilgan sonlar: " + a + ", " + b + ", " + d + "<br>");
// document.write("O'rta arifmetik: " + average.toFixed(2) + "<br>");
// document.write("O'rtadagi son (o'rtacha qiymat emas): " + middleNumber);

//IF14
// let a = +prompt("A sonni kiriting:");
// let b = +prompt("B sonni kiriting:");
// let c = +prompt("C sonni kiriting:");
// let min = Math.min(a, b, c);
// let max = Math.max(a, b, c);
// document.write("Kiritilgan sonlar: " + a + ", " + b + ", " + c );
// document.write("Eng kichik son: " + min );
// document.write("Eng katta son: " + max);

//IF15
// let a = +(prompt("Birinchi sonni kiriting:"));
// let b = +(prompt("Ikkinchi sonni kiriting:"));
// let c = +(prompt("Uchinchi sonni kiriting:"));
// let numbers = [a, b, c];
// numbers.sort((x, y) => y - x); 
// document.write(`Eng katta 2 ta son: ${numbers[0]}, ${numbers[1]}`);