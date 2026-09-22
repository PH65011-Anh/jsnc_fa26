// array []
const student1 = "anh";
const student2 = "binh";
const student3 = "chien";

const students = ["anh", "binh", "chien"];
const ids = [1, 5, 23, 45, 54];
const actives = [ true, false, 42, "anhng"];
// danh index: 0,1,2
console.log("ban dau", students);
students[0] = "anhhh";
console.log("sau khi thay doi", students); 
console.log("Độ dài array", students.length); 

students.push("anh2");
console.log("sau khi thay doi", students);

// for
for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}

// object
const student = {
  id: "ph65011",
  name: "anhnvn",
  age: 22,
};
console.log(student.id);
student.id = "ph888";
// student = {}; => error
student.addess = "ha noi";
delete student.addess;
console.log(student.id);
console.log(student.addess);

// array object
const myStudents = [
  {
    id: "ph65011",
    name: "anhnvn",
  },
  {
    id: "ph888",
    name: "namdv",
  },
];

console.log(myStudents[0].id);

// truy cap dom id = students
let html = document.getElementById("students");
let content = "";
// canh so 1: ``
for (let i = 0; i < myStudents.length; i++) {
  content += `
    <div>
      <h3>Ten sinh vien: ${myStudents[i].name}</h3>
      <h4>ID sinh vien: ${myStudents[i].id}</h4>
    </div>
  `;
}

html.innerHTML = content;

console.log(html);
