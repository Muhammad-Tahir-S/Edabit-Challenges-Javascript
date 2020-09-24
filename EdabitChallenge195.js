//Given a two digit number, return true if that number contains one even and one odd digit.

const oneOddOneEven = n => ~~(n / 10) % 2 !== n % 2;