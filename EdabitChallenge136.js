//Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city and returns to the origin city?

//Return the total number of possible paths a salesman can travel, given n paths.

function paths(n){
return n === 0 ? 1 : n * paths(n - 1)
}