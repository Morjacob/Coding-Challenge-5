// Task 1- Create an Inventory Array of Product Objects

const Inventory = [
    { name: 'Espresso', price: 5, quantity: 11 },
    { name: 'Latte', price: 6, quantity: 8 },
    { name: 'Cappuccino', price: 3, quantity: 8 },
    { name: 'Mocha', price: 4, quantity: 6 }
]

// Task 2- Create an Orders Array of Order 

let orders = []


// Task 3- Create a Function to Place an Order

function placeOrder(customerName, coffeeOrder) {
    let itemsOrdered = []; // Initialize with empty array

    for (const item of coffeeOrder) {
        const order = Inventory.find(coffee => coffee.name === item.order); 

        if (order && order.quantity >= item.quantity) { // checks item and quantity in stock and subtracts items ordered from current stock
            order.quantity -= item.quantity;
            itemsOrdered.push(item);
        } else if (order) {
            console.log(`Error: Insufficient stock for ${item.order}`);
        } else {
            console.log(`Error: Product ${item.order} not found in inventory.`);
        }
    }

  // creates the order so it can be places for Julia
    if (itemsOrdered.length > 0) {
        const order = {
            name: customerName,
            items: itemsOrdered, 
            status: "pending"
        };
        orders.push(order);

    console.log(`Order placed for ${customerName}`);
} else {
    console.log(`Nothing ordered for ${customerName}`);
}
}

placeOrder('Julia', [{order: 'Espresso', quantity: 11}]);




// Task 4- Create a Function to Calculate Total for an Order


function calculateOrderTotal(order, inventory) {
    let total = 0;
    if (order && order.items) { // Checks if the order and the items exist in array
        for (const item of order.items) {
            const coffee = inventory.find(coffee => coffee.name === item.order);
            if (coffee) {
                total += coffee.price * item.quantity; // calculates total
            }
        }
    }
    return total;
}


let juliaOrder = orders.find(order => order.name === 'Julia'); 
let totalAmount = calculateOrderTotal(juliaOrder, Inventory); 
console.log(`Total Amount: $${totalAmount}`);


// Task 5- Create a Function to Mark an Order as Completed

function completeOrder (customerName) {
    const order = orders.find (order => order.name === customerName);

    if (order) {
        order.status = 'Completed';
        console.log (`Order for ${customerName} is completed:`, order.items); // will show Julia's completed order with quantity included
    } else { 
        console.log (`Error: Order not found for ${customerName}.`);

    }

    }
    
    completeOrder ('Julia');




// Task 6- Create a Function to Check Pending Orders

function checkPendingOrders (orders) {
    orders.forEach (order => {
        if (order.status === 'Pending') {
            console.log (`order: ${order.name}:`)
        }
    }); }

// Will only console.log pending orders
checkPendingOrders(orders);