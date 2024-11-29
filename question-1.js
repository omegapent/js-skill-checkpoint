// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200;
inventory.orange = { price: 20, quantity: 300 };

let totalPrice = 0;
for (let key in inventory) {
  totalPrice = totalPrice + inventory[key].price * inventory[key].quantity; 
}

console.log(`Total inventory value: ${totalPrice} baht`); //'Total inventory value: 13500 baht'
