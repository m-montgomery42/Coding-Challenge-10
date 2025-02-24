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