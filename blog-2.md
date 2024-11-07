# Handling Asynchronous Operations in TypeScript with `async/await`

In modern web development, asynchronous operations are a key components, especially when dealing with time-consuming tasks like fetching data from APIs or reading files. In Typescript, there are several ways to handle asynchronous operations, but `async/await` has emerged as the most popular and efficient method.

## Challenges with Callbacks and Promises

Before `async/await` , developers commonly used **callbacks** and **promises** to handle asynchronous operations. Callbacks, while functional, ofter led to "callback hell" - deeply nested functions that made the code hard to read and maintain. Promises were introduced as a cleaner alternative, providing methods like `.then()` and `.catch()` to handle success and failure. However, chaining these promises in complex scenarios could still result in difficult-to-read code.

## Introducing `async/await`

**`async/await`**, introduced in ECMAScript 2017, simplifies asynchronous code even further by allowing developers to write asynchronous code in a manner that looks and behaves like synchronous code. The `async` keyword makes a function return a promise, while `await` pauses the function's execution until the promise resolves, making asynchronous code cleaner and more readable.

### Example :
```typescript
async function fetchData(): Promise<string>{
    return new Promise((resolve)=> setTimeout(()=> resolve("Data fetched!"),1000))
}
async function logData(){
    const data = await fetchData();
    console.log(data) ; //Outputs: Data fetched!
}

logData();
```

## Error handling with `try/catch`

when working with asynchronous operations, handling errors gracefully is important. In `async/await`, errors are handled in a more synchronous manner using `try/catch` blocks, which makes it easier to manage errors and avoid deeply nested `.catch()` methods.

### Example with Error handling : 
```typescript
async function fetchDataWithError(): Promise <string>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> reject("Error fetching data!"),1000)
    })
}
async function logDataWithError(){
    try{
        const data = await fetchDataWithError();
        console.log(data);
    } catch(error){
        console.error("Failed to fetch data", error); //Outputs : Failed to fetch data : Error fetching data!
    }
}

logDataWithError();
```



