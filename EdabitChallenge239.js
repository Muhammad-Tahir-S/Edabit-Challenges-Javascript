//Given a number, return a string of the word "Boom"

const boomIntensity = num => {
  if (num < 2) return 'boom'
  
  let str = 'B' + 'o'.repeat(num) + 'm'
  
  if (num % 2 == 0) str = str + '!'
  if (num % 5 == 0) str = str.toUpperCase()
  
  return str
}