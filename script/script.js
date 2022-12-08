const firstProductPrice = 15.678;
const secondProductPrice = 123.965;
const thirdProductPrice = 90.2345;
console.log(`Price of the first product is ${firstProductPrice}`);
console.log(`Price of the second product is ${secondProductPrice}`);
console.log(`Price of the third product is ${thirdProductPrice}`);

const maxPrice = Math.max(firstProductPrice, secondProductPrice, thirdProductPrice);
const minPrice = Math.min(firstProductPrice, secondProductPrice, thirdProductPrice);
console.log(`Max price is ${maxPrice}, and min price is ${minPrice}`);

const productsSum = (firstProductPrice + secondProductPrice + thirdProductPrice);
console.log(`Price of all products is ${productsSum}`);

const roundedProductsSum = ((Math.floor(firstProductPrice)) + (Math.floor(secondProductPrice)) + (Math.floor(thirdProductPrice)));
console.log(`The sum of the cost of all goods, rounded down: ${roundedProductsSum}`);

function roundNearest100(num) {
    return Math.round(num / 100) * 100;
  }
  console.log("Price rounded to the nearest 100: " + roundNearest100(roundedProductsSum));

//  ?
//  ?
//  ?

const clientMoney = 500;
 const clientsRest = (clientMoney - productsSum);
 console.log(`The remaining amount, when paying for all goods, if the client pays UAH 500: ${clientsRest}`);

 const avgPrice = ((firstProductPrice + secondProductPrice + thirdProductPrice) / 3).toFixed(2);
 console.log(`Avarage price is ${avgPrice}`);

 const saleRandom = Math.random() * (100 - 1) + 1;
 console.log(`Randon sale: ${saleRandom}`);

 const priceAfterSale = (productsSum - (productsSum / 100 * saleRandom)).toFixed(2);
 console.log(`Price of the products after random sale: ${priceAfterSale}`);

 const netProfit = (productsSum / 2 - (productsSum - (productsSum / 100 * saleRandom)));
 console.log(`Net profit after sale ${netProfit}`);