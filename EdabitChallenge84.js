//Promises are just objects that contain the outcome of asynchronous operations. So when do you use one? When you want to control the outcome of an asynchronous operation. All you have to do is wrap the asynchronous function with a promise constructor.

//The promise constructor requires you to pass a function called the executor which takes two parameters, resolve and reject. Both are functions that you use to pass or reject a value that is usually the result of the async operation. Here's an example of a simple promise:

let promise = new Promise( (resolve, reject) => {
  setTimeout(( ) => {
     resolve("edabit")
  }, 1000)
})