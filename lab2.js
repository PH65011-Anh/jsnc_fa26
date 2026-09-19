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

