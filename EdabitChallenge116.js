//Create a function that takes an object and returns the keys and values as separate arrays.function keysAndValues(obj) {

function keysAndValues(obj) {
  var keys = Object.keys(obj);
  return [keys, keys.map( key => obj[key] )];
}