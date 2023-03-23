//////////////////////
// Global Variables //
//////////////////////

const bookOne = {
   title: "Corduroy",
   author: "Don Freeman",
   publisher: "Viking Books",
   year: "1968",
   jacketColor: "firebrick"
}
const bookTwo = {
   title: "Goodnight Moon",
   author: "Margaret Wise Brown",
   publisher: "HarperFestival",
   year: "1947",
   jacketColor: "green"
}
const bookThree = {
   title: "The Very Hungry Caterpillar",
   author: "Eric Carle",
   publisher: "World Publishing Company",
   year: "1969",
   jacketColor: "white"
}
const bookFour = {
   title: "The Snowy Day",
   author: "Ezra Jack Keats",
   publisher: "Viking Press",
   year: "1962",
   jacketColor: "pink"
}

///////////////
// Functions //
///////////////

function displayBook(x) {
   if (x == 1) {
      document.getElementById("bookTitle").innerText = bookOne.title;
      document.getElementById("bookAuthor").innerText = bookOne.author;
      document.getElementById("bookPublisher").innerText = bookOne.publisher;
      document.getElementById("bookYear").innerText = bookOne.year;
      document.getElementById("bookDisplay").style.backgroundColor = bookOne.jacketColor;
   }
   if (x == 2) {
      document.getElementById("bookTitle").innerText = bookTwo.title;
      document.getElementById("bookAuthor").innerText = bookTwo.author;
      document.getElementById("bookPublisher").innerText = bookTwo.publisher;
      document.getElementById("bookYear").innerText = bookTwo.year;
      document.getElementById("bookDisplay").style.backgroundColor = bookTwo.jacketColor;
   }
   if (x == 3) {
      document.getElementById("bookTitle").innerText = bookThree.title;
      document.getElementById("bookAuthor").innerText = bookThree.author;
      document.getElementById("bookPublisher").innerText = bookThree.publisher;
      document.getElementById("bookYear").innerText = bookThree.year;
      document.getElementById("bookDisplay").style.backgroundColor = bookThree.jacketColor;
   }
   if (x == 4) {
      document.getElementById("bookTitle").innerText = bookFour.title;
      document.getElementById("bookAuthor").innerText = bookFour.author;
      document.getElementById("bookPublisher").innerText = bookFour.publisher;
      document.getElementById("bookYear").innerText = bookFour.year;
      document.getElementById("bookDisplay").style.backgroundColor = bookFour.jacketColor;
   }
}
