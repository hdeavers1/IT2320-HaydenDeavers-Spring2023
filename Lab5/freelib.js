//////////////////////
// Global Variables //
//////////////////////

const bookArray = 
[{"title":"Corduroy", "author":"Don Freeman",
"publisher":"Viking Books", "year":"1968","jacketcolor":"firebrick"},

{"title":"Goodnight Moon", "author":"Margaret Wise Brown",
"publisher":"HarperFestival", "year":"1947","jacketcolor":"green"},

{"title":"The Very Hungry Caterepillar", "author":"Eric Carle",
"publisher":"World Publishing Company", "year":"1969","jacketcolor":"white"},

{"title":"The Snowy Day", "author":"Ezra Jack Keats",
"publisher":"Viking Press", "year":"1962","jacketcolor":"pink"}]


///////////////
// Functions //
///////////////

function displayBook(x) {
   if (x == 1) {
      document.getElementById("bookTitle").innerText = bookArray[0].title;
      document.getElementById("bookAuthor").innerText = bookArray[0].author;
      document.getElementById("bookPublisher").innerText = bookArray[0].publisher;
      document.getElementById("bookYear").innerText = bookArray[0].year;
      document.getElementById("bookDisplay").style.backgroundColor = bookArray[0].jacketcolor;
   }
   if (x == 2) {
      document.getElementById("bookTitle").innerText = bookArray[1].title;
      document.getElementById("bookAuthor").innerText = bookArray[1].author;
      document.getElementById("bookPublisher").innerText = bookArray[1].publisher;
      document.getElementById("bookYear").innerText = bookArray[1].year;
      document.getElementById("bookDisplay").style.backgroundColor = bookArray[1].jacketcolor;
   }
   if (x == 3) {
      document.getElementById("bookTitle").innerText = bookArray[2].title;
      document.getElementById("bookAuthor").innerText = bookArray[2].author;
      document.getElementById("bookPublisher").innerText = bookArray[2].publisher;
      document.getElementById("bookYear").innerText = bookArray[2].year;
      document.getElementById("bookDisplay").style.backgroundColor = bookArray[2].jacketcolor;
   }
   if (x == 4) {
      document.getElementById("bookTitle").innerText = bookArray[3].title;
      document.getElementById("bookAuthor").innerText = bookArray[3].author;
      document.getElementById("bookPublisher").innerText = bookArray[3].publisher;
      document.getElementById("bookYear").innerText = bookArray[3].year;
      document.getElementById("bookDisplay").style.backgroundColor = bookArray[3].jacketcolor;
   }
}
