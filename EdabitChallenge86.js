//Welcome to the beginning of this collection on Computer Science Algorithms. Admittedly there are other challenges on Edabit that deal with recursion and algorithmic processes, but these particular challenges are designed to give examples and to educate users on the topics being covered.

function factorial(x) {
	if (x < 0) return
  if (x === 0) return 1
  return x * factorial(x - 1)
}