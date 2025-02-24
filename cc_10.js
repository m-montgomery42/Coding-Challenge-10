// Task 1: Creating a Product Class
// Define the Product class
class Product {
    // Initialize the properties of the Product class
    constructor(name, id, price, stock) {
      this.name = name; // Assign the name property
      this.id = id; // Assign the id property
      this.price = price; // Assign the price property
      this.stock = stock; // Assign the stock property
    }
  
    // Method to return the product's details as a formatted string
    getDetails() {
      return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
  
    // Method to update the stock level when an order is placed
    updateStock(quantity) {
      this.stock -= quantity; // Decrease the stock by the quantity ordered
    }
  }
  
  // Product information
  const product1 = new Product("Smartphone", 202, 800, 20);
  
  // Log the product's details to the console before updating the stock
  console.log(product1.getDetails()); 
  
  // Update the stock by reducing 3 units from the stock
  product1.updateStock(3);
  
  // Log the product's details to the console after updating the stock
  console.log(product1.getDetails());


// Task 2: Creating an Order Class

// Define the Product class (from previous task)
class Product {
    // Initialize the properties of the Product class
    constructor(name, id, price, stock) {
      this.name = name; // Assign the name property
      this.id = id; // Assign the id property
      this.price = price; // Assign the price property
      this.stock = stock; // Assign the stock property
    }
  
    // Method to return the product's details as a formatted string
    getDetails() {
      return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
  
    // Method to update the stock level when an order is placed
    updateStock(quantity) {
      this.stock -= quantity; // Decrease the stock by the quantity ordered
    }
  }
  
  // Define the Order class
  class Order {
    // Initialize the properties of the Order class
    constructor(orderId, product, quantity) {
      this.orderId = orderId; // Assign the orderId property
      this.product = product; // Assign the product property (instance of Product)
      this.quantity = quantity; // Assign the quantity property
      this.totalPrice = product.price * quantity; // Calculate the total price for the order
      product.updateStock(quantity); // Reduce the stock of the product when the order is placed
    }
  
    // Method to return the order's details as a formatted string
    getOrderDetails() {
      return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
  }
  
  // Product information (different product)
  const product2 = new Product("Wireless Mouse", 202, 25, 50);
  
  // Create an order for the product
  const order2 = new Order(601, product2, 5);
  
  // Log the order's details to the console
  console.log(order2.getOrderDetails()); 
  
  // Log the updated product details (stock reduced)
  console.log(product2.getDetails());