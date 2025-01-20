const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const expenses = [];
let total=0;

function showExpenseTracker() {
    console.log(`
          Expense Tracker
        ------------------
        Options to perform
        1. Add 
        2. View
        3. Exit
    `);
    rl.question("Choose an option from the list: ", handleOption);
}

function handleOption(option) {
    switch (option.trim()) {
        case "1":
            console.log("Enter the expense details:");
            rl.question("Enter the type of expense: ", (type) => {
                rl.question("Enter the amount: ", (amount) => {
                    rl.question("Enter the month of expense: ", (month) => {
                        expenses.push({ type, amount: parseFloat(amount), month });
                        console.log("Expense added successfully.");
                        showExpenseTracker();
                    });
                });
            });
            break;
        case "2":
            console.log("\nYour Expense Details:");
            if (expenses.length === 0) {
                console.log("No expenses added yet.");
            } else {
                expenses.forEach((expense,index) => {
                    console.log(
                        `${index + 1}. Expense Type: ${expense.type}, Amount: ${expense.amount}, Month: ${expense.month}`
                    );
                    total=total + expense.amount;
                    console.log("Total expenses:",total);
                }); 
                
            }
            showExpenseTracker();
            break;
        case "3":
            console.log("Expense tracker is closed.");
            rl.close();
            break;
            
        default:
            console.log("Invalid option. Please try again.");
            showExpenseTracker();
            break;
    }
}

showExpenseTracker();



