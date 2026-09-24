console.log("Bai 1:");
const name = "Nguyễn Văn An";
const age = 20;
const major = "Lập trình Web";
const a = `Xin chào  ${name}`;
const b = `Bạn ${age} tuổi`;
const c = `Ngành học: ${major}`;
console.log(a);
console.log(b);
console.log(c);


console.log("Bai 2:");
const student = {
id: 1,
name: "Nguyễn Văn An",
age: 20,
major: "Lập trình Web",
};
const d = `Mã sv: ${student.id}`;
const e = `Họ tên:  ${student.name}`;
const g = `Tuổi: ${student.age}`;
const h = `Ngành: ${student.major}`;
console.log(d);
console.log(e);
console.log(g);
console.log(h);


console.log("Bai 3:");
function add(a, b) {
  return a + b;
}
const arrow = (a, b) =>{
    return a + b;
}


console.log("Bai 4:");
const square = (a) =>{
    return a * a;
}
console.log(square(5));
const sum = (a, b) =>{
    return a + b;
}
console.log(sum(10,20));
const sayhello = (a)=>{
    console.log(`Xin chào ${a}`);
}
sayhello("Ánh");

console.log("Bai 5:");
const numbers = [1, 2, 3, 4, 5];
const abc = numbers.map((number) => {
    return number * 2;
});
console.log(abc);

console.log("Bai 6:");
const students = [
{ id: 1, name: "An" },
{ id: 2, name: "Bình" },
{ id: 3, name: "Cường" },
];
const bcd = students.map((student) => {
    return student.name;
});
console.log(bcd);





