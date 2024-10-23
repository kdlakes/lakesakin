let employees = [
  { name: "John Doe", age: 25, department: "HR", position: "junior", bloodGroup: "A+", permanentStaff: true },
  { name: "Jane Smith", age: 30, department: "Marketing", position: "senior", bloodGroup: "B-", permanentStaff: false },
  { name: "Bob Johnson", age: 35, department: "Sales", position: "senior", bloodGroup: "AB+", permanentStaff: true },
  { name: "Alice Brown", age: 20, department: "IT", position: "junior", bloodGroup: "O-", permanentStaff: false },
  { name: "Mike Davis", age: 40, department: "Finance", position: "senior", bloodGroup: "A-", permanentStaff: true },
  { name: "Emily Taylor", age: 28, department: "Customer Support", position: "junior", bloodGroup: "B+", permanentStaff: false },
  { name: "David White", age: 32, department: "Operations", position: "senior", bloodGroup: "AB-", permanentStaff: true },
  { name: "Sophia Lee", age: 22, department: "Research", position: "junior", bloodGroup: "O+", permanentStaff: false },
  { name: "Olivia Martin", age: 38, department: "Management", position: "senior", bloodGroup: "A+", permanentStaff: true },
  { name: "William Harris", age: 45, department: "Administration", position: "senior", bloodGroup: "B-", permanentStaff: true },
];

console.log("Employees Array:");
console.log(employees);

console.log("\nLength of Employees Array: " + employees.length);

console.log("\nFirst Employee:");
console.log(employees[0]);
console.log("\nLast Employee:");
console.log(employees[employees.length - 1]);

let newEmployee = {
  name: "Ethan Thompson",
  age: 29,
  department: "Software Development",
  position: "junior",
  bloodGroup: "AB+",
  permanentStaff: false,
};


employees.push(newEmployee);


console.log("\nUpdated Employees Array:");
console.log(employees);


console.log("\nUpdated Length of Employees Array: " + employees.length);

