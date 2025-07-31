/**
Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.

 */

// কিছু ভিন্ন ভিন্ন ভ্যারিয়েবল তৈরি করো।

// কোনটাতে অ্যারে রাখো

// কোনটাতে অ্যারে ছাড়া (যেমন সংখ্যা, স্ট্রিং, অবজেক্ট, ইত্যাদি)

// তারপর Array.isArray() মেথড ব্যবহার করে প্রতিটি ভ্যারিয়েবলের উপর যাচাই করো, সেটা অ্যারে কিনা।

// যদি অ্যারে হয়, তাহলে কনসোলে দেখাও:
// 👉 "variableName একটি অ্যারে"
// না হলে দেখাও:
// 👉 "variableName অ্যারে নয়"

const uncle = ["Fatiha Binte Faruk", "Omar Faruk", "Samiya", "Sabiha"];
const ages = [3.6, 32, 12, 10];
const car = { type: "Fiat", model: "500", color: "white" };

const arrayCheck = Array.isArray(uncle);
const arrayChecked = Array.isArray(car);
console.log(arrayCheck);
console.log(arrayChecked);
