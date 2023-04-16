//////////////////////
// Global Variables //
//////////////////////

const bookArray = 
[{"title":"Corduroy", "author":"Don Freeman",
"publisher":"Viking Books", "year":"1968","jacketcolor":"firebrick"},

{"title":"Goodnight Moon", "author":"Margaret Wise Brown",
"publisher":"Harper Festival", "year":"1947","jacketcolor":"green"},

{"title":"The Very Hungry Caterepillar", "author":"Eric Carle",
"publisher":"World Publishing Company", "year":"1969","jacketcolor":"white"},

{"title":"The Snowy Day", "author":"Ezra Jack Keats",
"publisher":"Viking Press", "year":"1962","jacketcolor":"pink"}]


///////////////
// Functions //
///////////////
$(document).ready(function() {

   $('#book1button').on('click', function() {
      displayBook(1);
   });
   $('#book2button').on('click', function() {
      displayBook(2);
   });
   $('#book3button').on('click', function() {
      displayBook(3);
   });
   $('#book4button').on('click', function() {
      displayBook(4);
   });
});

function displayBook(x) {
   if (x == 1) {
      $("#bookTitle").text(bookArray[0].title)
      $("#bookAuthor").text(bookArray[0].author)
      $("#bookPublisher").text(bookArray[0].publisher)
      $("#bookYear").text(bookArray[0].year)
      $("#bookDisplay").css("background-color", bookArray[0].jacketcolor)
   }
   if (x == 2) {
      $("#bookTitle").text(bookArray[1].title)
      $("#bookAuthor").text(bookArray[1].author)
      $("#bookPublisher").text(bookArray[1].publisher)
      $("#bookYear").text(bookArray[1].year)
      $("#bookDisplay").css("background-color", bookArray[1].jacketcolor)
   }
   if (x == 3) {
      $("#bookTitle").text(bookArray[2].title)
      $("#bookAuthor").text(bookArray[2].author)
      $("#bookPublisher").text(bookArray[2].publisher)
      $("#bookYear").text(bookArray[2].year)
      $("#bookDisplay").css("background-color", bookArray[2].jacketcolor)
   }
   if (x == 4) {
      $("#bookTitle").text(bookArray[3].title)
      $("#bookAuthor").text(bookArray[3].author)
      $("#bookPublisher").text(bookArray[3].publisher)
      $("#bookYear").text(bookArray[3].year)
      $("#bookDisplay").css("background-color", bookArray[3].jacketcolor)
   }
}
