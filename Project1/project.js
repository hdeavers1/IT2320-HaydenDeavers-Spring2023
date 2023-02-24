
let sales = [
   ['East (Matt)', 142, 0],
   ['West (Mike)', 208, 0],
   ['Westshore (Mark)', 66, 0],
   ['Metro (Milt)', 240, 0]
];
var temp;
let size1 = sales.length;
console.table(sales);
function salesByPerson() {
   alert(sales[0][0] + ': $' + sales[0][1] + '\n' +
         sales[1][0] + ': $' + sales[1][1] + '\n' +
         sales[2][0] + ': $' + sales[2][1] + '\n' +
         sales[3][0] + ': $' + sales[3][1] + '\n');
}

function bestAndWorst() {
   for (let i = 0; i < size1; i++) {
      for (let j = i+1; j < size1; j++) {
         if(sales[i][1]>sales[j][1]) {
            [sales[i], sales[j]] = [sales[j], sales[i]]
         }
      }
   }
   alert("The lowest sales made in Q1 was $"+ sales[0][1] + " by " + sales[0][0] +
   "\nThe best sales made in Q1 was $"+ sales[3][1] + " by " + sales[3][0]);
}

function commissionsByMonth() {
   for (let i = 0; i < size1; i++) {
       sales[i][2] = sales[i][1] * .13;
   }
   alert(sales[0][0] + ': $' + sales[0][2] + '\n' +
   sales[1][0] + ': $' + sales[1][2] + '\n' +
   sales[2][0] + ': $' + sales[2][2] + '\n' +
   sales[3][0] + ': $' + sales[3][2] + '\n');
}