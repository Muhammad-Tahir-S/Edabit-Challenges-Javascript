//Create a function that takes the volume of a cube and returns the length of the cube's main diagonal, rounded to two decimal places.

function cubeDiagonal(volume){
  return Math.round(Math.cbrt(volume) * Math.sqrt(3) * 100) / 100
}