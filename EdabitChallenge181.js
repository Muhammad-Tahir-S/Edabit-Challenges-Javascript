//Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

function hackerSpeak(str) {
  var chars = {'a':'4','e':'3','i':'1', 'o':'0', 's':'5'};
  str = str.replace(/[aeios]/g, letter => chars[letter]);
  
  return str;
}