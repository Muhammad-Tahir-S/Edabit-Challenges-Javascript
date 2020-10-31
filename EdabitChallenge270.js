//Given a number between 1-26, return what letter is at that position in the alphabet. Return "invalid" if the number given is not within that range, or isn't an integer.

const letterAtPosition = n =>
 Number.isInteger(n)&& n>0? (n+9).toString(36) : 'invalid';