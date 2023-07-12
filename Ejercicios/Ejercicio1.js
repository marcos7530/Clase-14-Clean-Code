function calculateTotal(items,{tax=0, discount=0}={} ) {

  let totalValue = 0;

  for(var i = 0; i < items.length; i++) 
  {
    totalValue += items[i];
  }
  totalValue += totalValue * tax;
  totalValue -= totalValue * discount
  return totalValue.toFixed(2);
}
const options={
  tax : 0.05,
  discount : 0.10
}
const itemsPrices = [10, 20, 30];

console.log(`Total: ${calculateTotal(itemsPrices, tax, discount)}`);
