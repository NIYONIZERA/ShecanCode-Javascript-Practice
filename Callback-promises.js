//Promises
// example 1
const orderFood = new Promise((resolve, reject) => {
    let foodReady = false; // Change to false to test rejection

    if (foodReady) {
        resolve("Food is ready! 🍔");
    } else {
        reject("Sorry, we're out of stock. ❌");
    }
});

// Using the promise
orderFood
    .then(message => console.log(message)) // ✅ Runs if resolved
    .catch(error => console.log(error)) // ❌ Runs if rejected
    .finally(() => console.log("Order process complete.")); // Always runs
// then() runs if the promise resolves
// catch() runs if the promise rejects
// finally() runs no matter what

//Example 2
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data... 📡");

        setTimeout(() => {
            let success = true; // Try changing to false

            if (success) {
                resolve("Data received ✅");
            } else {
                reject("Failed to fetch data ❌");
            }
        }, 2000);//The promise waits for 2 seconds and then resolves or rejects
    });
}

fetchData()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Fetch operation complete."));
