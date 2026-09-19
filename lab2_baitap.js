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
