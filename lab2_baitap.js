console.log("Day la lab 2");

console.log("Bai1: ");
const names = ["An", "Bình", "Nam", "Hòa", "Lan"];
console.log(names);
console.log("Phan tu dau tien:", names[0]);
console.log("Phan tu cuoi cung:", names[4]);
console.log("So luong phan tu:", names.length);
names.push("Anhs");
console.log(names);
names.pop();
console.log(names);

console.log("Bai2: ");
for(i = 0; i < names.length; i++){
    console.log(names[i]);
}

console.log("Bai3: ");
const student = { id: 1, name: "Nguyễn Văn An", age: 20, email: "an@gmail.com", major: "CNTT", };
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.email);
student.age = 22;
console.log(student.age);
student.phone = "123456";
console.log(student);

console.log("Bai4: ");
const students = [
    { id: 1,  name: "Nguyễn Văn An",age: 20, },
    { id: 2, name: "Trần Văn Bình", age: 21, }, 
    { id: 3, name: "Lê Văn Nam", age: 20, },
 ];
console.log(students);
console.log(students[0].name);
console.log(students[1].age);

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

const result = students.map(function (student) {
  return student.name;
});
console.log(result);

console.log("Bai5: ");
let html = document.getElementById("students");
let content = "";
for (let i = 0; i < students.length; i++) {
  content += `
    <div>
      <h3>Ten sinh vien: ${students[i].name}</h3>
      <h4>Tuoi sinh vien: ${students[i].age}</h4>
    </div>
  `;
}

html.innerHTML = content;
console.log(html);


console.log("Bai tong hop: ");
const products = [
{
id: 1,
name: "iPhone 15",
price: 20000000,
},
{
id: 2,
name: "Samsung Galaxy S24",
price: 18000000,
},
{
id: 3,
name: "Xiaomi 14",
price: 12000000,
},
];
console.log(products);

for(let i = 0; i < products.length; i++){
  console.log(products[i].name + " - " + products[i].price );
}

let tong = 0;
for(let i = 0; i < products.length; i++){
  tong += products[i].price;
}
console.log("Tong: " + tong);
html = document.getElementById("products");
content = "";
for (let i = 0; i < products.length; i++) {
  content += `
    <div>
      <h3>Ten sp: ${products[i].name}</h3>
      <h4>Gia sp: ${products[i].price}</h4>
    </div>
  `;
}


html.innerHTML = content;

console.log(html);

