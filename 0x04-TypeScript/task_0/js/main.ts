// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student ={
    firstName: "Alice",
    lastName: "Johnson",
    age: 20,
    location: "Addis Ababa"
};
const student2: Student ={
   firstName: "Bob",
   lastName: "Smith",
   age: 22,
   location: "Nairobi"
};

// Create an array containing the students
const studentsList : Student[] = [student1, student2];

// Render a table
const table = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});
