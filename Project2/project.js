let drinks = [
   {
      "name": 'Classic Lemonade',
      "qty": 0,
      "price": 5.00,
   },
   {
      "name": 'Strawberry Lemonade',
      "qty": 0,
      "price": 6.00,
   },
   {
      "name": 'Special Limeade',
      "qty": 0,
      "price": 8.00,
   }
];

let total = 0;
$(document).ready(function() {

   $('#addToOrder0').on('click', function() {
      addToOrder(0);
   });
   $('#addToOrder1').on('click', function() {
      addToOrder(1);
   });
   $('#addToOrder2').on('click', function() {
      addToOrder(2);
   });
   $('#removeFromOrder0').on('click', function() {
      removeFromOrder(0);
   });
   $('#removeFromOrder1').on('click', function() {
      removeFromOrder(1);
   });
   $('#removeFromOrder2').on('click', function() {
      removeFromOrder(2);
   });
   $('#clearAllItems').on('click', function() {
      clearAllItems();
   })
});
function updateTotal() {
   let lemonadeQty = drinks[0].qty;
   let strawberryQty = drinks[1].qty;
   let limeadeQty = drinks[2].qty;
   $('#quantity0').text(lemonadeQty);
   $('#quantity1').text(strawberryQty);
   $('#quantity2').text(limeadeQty);
   $('#lemonade').text('$' + (lemonadeQty * drinks[0].price).toFixed(2));
   $('#strawberry').text('$' + (strawberryQty * drinks[1].price).toFixed(2));
   $('#limeade').text('$' + (limeadeQty * drinks[2].price).toFixed(2));
   total = (drinks[0].qty * drinks[0].price) +
           (drinks[1].qty * drinks[1].price) +
           (drinks[2].qty * drinks[2].price);
   $("#total").text("$" + total.toFixed());

}
function addToOrder(item) {
   drinks[item].qty = drinks[item].qty + 1;
   updateTotal();
}
function removeFromOrder(item) {
   if (drinks[item].qty > 0) {
   drinks[item].qty = drinks[item].qty - 1;
   updateTotal();
   }
}
function clearAllItems() {
drinks[0].qty = 0;
drinks[1].qty = 0;
drinks[2].qty = 0;
updateTotal();
}