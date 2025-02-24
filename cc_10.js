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


// Task 3: Creating an Inventory Class
// Define the Product class (from previous tasks)
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
  
  // Define the Inventory class
  class Inventory {
    // Initialize the Inventory class with an empty products array
    constructor() {
      this.products = []; // Array to store the products
    }
  
    // Method to add a product to the inventory
    addProduct(product) {
      this.products.push(product); // Add the product to the products array
    }
  
    // Method to list all products in the inventory
    listProducts() {
      this.products.forEach(product => {
        console.log(product.getDetails()); // Log each product's details
      });
    }
  }
  
  // Product information
  const product1 = new Product("Gaming Headset", 305, 150, 25);
  
  // Create an inventory object
  const inventory = new Inventory();
  
  // Add product to the inventory
  inventory.addProduct(product1);
  
  // List all products in the inventory
  inventory.listProducts();


// Task 4: Implementing Order Management
// Define the Product class
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
  
    // Method to update stock
    updateStock(quantity) {
      this.stock -= quantity;
    }
  }
  
  // Define the Order class
  class Order {
    constructor(orderId, product, quantity) {
      this.orderId = orderId;
      this.product = product;
      this.quantity = quantity;
      this.totalPrice = this.product.price * this.quantity;
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
  
    addProduct(product) {
      this.products.push(product);
    }
  
    placeOrder(orderId, product, quantity) {
      if (product.stock >= quantity) {
        const order = new Order(orderId, product, quantity);
        this.orders.push(order);
        product.updateStock(quantity);
        console.log(order.getOrderDetails());  // Only log order details here
      }
    }
  
    listOrders() {
    }
  }
  
  // Define a different product
  const prod1 = new Product("Tablet", 203, 300, 10);
  
  // Create inventory and add the product
  const inventory = new Inventory();
  inventory.addProduct(prod1);
  
  // Place an order
  inventory.placeOrder(701, prod1, 2);
  
  // Print updated product details after the order is placed
  console.log(prod1.getDetails());


// Task 5: Implementing Product Restocking
// Define the Product class
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
  
    // Method to update stock
    updateStock(quantity) {
      this.stock -= quantity;
    }
  
    // Method to restock product (increase stock)
    restock(quantity) {
      this.stock += quantity;
    }
  }
  
  // Define the Inventory class
  class Inventory {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    // Restock a product by increasing its stock
    restockProduct(productId, quantity) {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        product.restock(quantity);
      }
    }
  }
  
  // Define a new product
  const prod1 = new Product("Smartphone", 202, 800, 5);
  
  // Create the inventory and add the product
  const inventory = new Inventory();
  inventory.addProduct(prod1);
  
  // Restock the product
  inventory.restockProduct(202, 3);
  
  // Print updated product details after restocking
  console.log(prod1.getDetails());