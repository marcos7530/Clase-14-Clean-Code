function CalculateTotal(items, tax, discount) {

  var totalValue = 0;

  for(var i = 0; i < items.length; i++) 
  {
    totalValue += items[i];
  }

  totalValue += totalValue * tax;

  discount ? totalValue -= totalValue * discount : totalValue;

  return totalValue.toFixed(2);
}

var itemsPrices = [10, 20, 30], tax = 0.05, discount = 0.10;

console.log(`Total: ${CalculateTotal(itemsPrices, tax, discount)}`);
