//Create a sorting function which sorts numbers not by numerical order, but by number length! This means sorting numbers with the least amount of digits first, up to the numbers with the most digits.

function number_len_sort(lst) {
  return lst.sort((a, b) => a.toString().length - b.toString().length);
}