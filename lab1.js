console.log("Day la lab 1");

let name = "Ngô Văn Ngọc Ánh";
let tuoi = 22;

const address = "Hà Nội";
const isStudent = true;

console.log("Họ tên:", name);
console.log("Tuổi:", tuoi);
console.log("Địa chỉ:", address);
console.log("Sinh viên:", isStudent);


console.log("Bài 2:");
let age = 20;
console.log(age);
age = 21;
console.log(age);

console.log("Bài 3:");
const a = 10;
const b = 5;

console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", a / b);

console.log("Bài 4:");
function sayHello(name) {
    console.log("Xin chào " + name);
}

sayHello("An");
sayHello("Bình");
sayHello("Chiến");


console.log("Bài 5:");
function sum(c,d){
    tong = c + d;
    return tong;
};
const result = sum(10, 20);
console.log(result);


console.log("Bài 6:");
function calculateTotal(price, quantity){
    money = price * quantity;
    return money;
};
const total = calculateTotal(50000, 3);
console.log(total);

console.log("Bài 7:");
const math = 8; 
const english = 7; 
const javascript = 9;
function calculateAverage(math, english, javascript){
    diemtb = (math + english + javascript) / 3;
    return diemtb;
};
const average = calculateAverage(8, 7, 9);
console.log(average);




