//Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

const cardHide = card => card.slice(card.length-4).padStart(card.length, '*')
