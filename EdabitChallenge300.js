//Given n number of layers and a given temperature, return the temperature inside of all those warm fuzzy layers. Round to the nearest tenth of a degree.

function calcBundledTemp(n, temp) {
  total = Number(temp.slice(0, -2));
  for (let i = 0; i < n; i++) {
    total += total * 0.1;
  }
  total = parseFloat(total.toFixed(1))
  if(!String(total).includes('.'))total =total + '.0'
  return total + "*C";
}