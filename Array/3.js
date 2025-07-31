/*
3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/
// একটা books নামের অ্যারে তৈরি করো, যেখানে বিভিন্ন বইয়ের নাম থাকবে।

// তারপর includes() মেথড ব্যবহার করে চেক করো যে সেই অ্যারে-তে "javascript" নামের কোনো বই আছে কিনা।

// যদি থাকে, তাহলে কনসোলে একটা মেসেজ দেখাও: "JavaScript বইটি অ্যারেতে আছে।"

// না থাকলে দেখাও: "JavaScript বইটি অ্যারেতে নেই।"

const books = ["Bengali", "ICT", "Javascript", "Geography", "English"];
if (books.includes("Javascript")) {
  console.log("JavaScript বইটি অ্যারেতে আছে।");
}
else{
    console.log("JavaScript বইটি অ্যারেতে নেই।");
}
