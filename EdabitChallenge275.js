//Given two integers a and b, return how many times a can be halved while still being greater than b.

function halveCount(a, b) {
return a<=b?-1:1+halveCount(a/2,b);
}