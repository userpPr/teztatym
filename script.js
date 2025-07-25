const orderList = document.getElementById('order-list');
const totalEl = document.getElementById('total');
let total = 0;

function addToOrder(dishName, price) {
  const item = document.createElement('li');
  item.textContent = `${dishName} - ${price}₽`;
  orderList.appendChild(item);

  total += price;
  totalEl.textContent = total;
}
