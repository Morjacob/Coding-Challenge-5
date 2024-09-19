// Task 1- Create an Inventory Array of Product Objects

const Inventory = [
    { name: Julia, order: 'Espresso', price: 5, quantity: 11 },
    { name: Chris, order: 'Latte', price: 6, quantity: 8 },
    { name: Keely, order: 'Cappuccino', price: 3, quantity: 8 },
    { name: Jordan, order: 'Mocha', price: 4, quantity: 6 }
]

// Task 2- Create an Orders Array of Order 

let orders = []


// Task 3- Create a Function to Place an Order

function placeOrder (customerName, order) {
   if 
}


// Task 4- Create a Function to Calculate Total for an Order

function calculateOrderTotal (order) {
    let total = 0;
    for (let i = 0; i < order.length; i++) {
        total += order[i];
    }

    return total;

}

let customerOrder = []
let totalAmount = calculateOrderTotal(customerOrder)
console.log(`Total Amount: $${totalAmount}`)



// Task 5- Create a Function to Mark an Order as Completed

function completeOrder (customerName) {
    const order = orders.find (order => order.customerName === customerName);

    if (order) {
        order.status = 'Completed';
        console.log (`Order for ${customerName} is completed:`, order);
    } else { 
        console.log (`Error: Order not complete for customer ${customerName}.`);

    }

    }
    
    completeOrder ('Julia');


//