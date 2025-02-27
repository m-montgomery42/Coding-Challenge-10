// Define the Product class once
class Product {
  constructor(name, id, price, stock) {
      this.name = name;
      this.id = id;
      this.price = price;
      this.stock = stock;
  }

  // Method to get product details
  getDetails() {
      return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
  }

  // Method to update stock when an order is placed
  updateStock(quantity) {
      if (quantity > this.stock) {
          console.log(`Not enough stock available for ${this.name}`);
          return false; // Return false if stock isn't enough
      }
      this.stock -= quantity;
      return true; // Return true if stock was successfully updated
  }

  // Method to restock product
  restock(quantity) {
      this.stock += quantity;
  }
}

// Define the Order class
class Order {
  constructor(orderId, product, quantity) {
      this.orderId = orderId;
      this.product = product;
      this.quantity = quantity;
      this.totalPrice = this.product.price * this.quantity;

      // Try updating the product stock
      if (!this.product.updateStock(quantity)) {
          this.totalPrice = 0; // Set total price to 0 if order couldn't be placed
      }
  }

  // Method to get order details
  getOrderDetails() {
      return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
  }
}

// Define the Inventory class
class Inventory {
  constructor() {
      this.products = [];
      this.orders = [];
  }

  // Add product to inventory
  addProduct(product) {
      this.products.push(product);
  }

  // List all products in inventory
  listProducts() {
      this.products.forEach(product => console.log(product.getDetails()));
  }

  // Place an order if stock is available
  placeOrder(orderId, productId, quantity) {
      const product = this.products.find(p => p.id === productId);
      if (product) {
          if (product.stock >= quantity) {
              const order = new Order(orderId, product, quantity);
              this.orders.push(order);
              console.log(order.getOrderDetails());
          } else {
              console.log(`Order failed: Not enough stock for ${product.name}`);
          }
      } else {
          console.log(`Order failed: Product ID ${productId} not found`);
      }
  }

  // Restock a product
  restockProduct(productId, quantity) {
      const product = this.products.find(p => p.id === productId);
      if (product) {
          product.restock(quantity);
          console.log(`Restocked ${quantity} units of ${product.name}`);
      } else {
          console.log(`Restock failed: Product ID ${productId} not found`);
      }
  }

  // List all orders placed
  listOrders() {
      this.orders.forEach(order => console.log(order.getOrderDetails()));
  }
}

// =========================
// TESTING THE IMPLEMENTATION
// =========================

// Task 1: Creating a product and displaying details
const product1 = new Product("Smartphone", 202, 800, 20);
console.log(product1.getDetails()); 

// Updating stock
product1.updateStock(3);
console.log(product1.getDetails());

// Task 2: Creating an order
const order1 = new Order(601, product1, 5);
console.log(order1.getOrderDetails());
console.log(product1.getDetails()); // Stock should be reduced

// Task 3: Adding product to inventory
const inventory = new Inventory();
inventory.addProduct(product1);
inventory.listProducts();

// Task 4: Placing an order through inventory system
const product2 = new Product("Wireless Mouse", 203, 25, 50);
inventory.addProduct(product2);
inventory.placeOrder(702, 203, 5);
inventory.listOrders();

// Task 5: Restocking a product
inventory.restockProduct(202, 10);
console.log(product1.getDetails()); // Should reflect increased stock