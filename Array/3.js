/*
3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/

const books = ["Bengali", "ICT", "Javascript", "Geography", "English"];
if (books.includes("Javascript")) {
  console.log("The JavaScript book is in the array");
}
else{
    console.log("The JavaScript book is not in the array");
}
