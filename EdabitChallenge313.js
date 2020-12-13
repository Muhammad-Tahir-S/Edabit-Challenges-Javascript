//Your job is to switch 2 variables using the XOR operator, which means your return statement should be return[a, b], but the value stored in the variables need to be switched.

const xor = (a, b) => [a ^ a ^ b, b ^ b ^ a];