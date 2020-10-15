//Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

function isAnagram(s1, s2) {
  const resolve = s => Array.from(s.toLowerCase()).sort().join('');
  return resolve(s1) === resolve(s2);
}