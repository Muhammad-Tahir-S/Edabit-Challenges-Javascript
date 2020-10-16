//Given a musical note, create a function that returns its enharmonic equivalent. The examples below should make this clear.

function getEquivalent(note) {
		const narr=["C","D","E","F","G","A","B"];
  const ind =narr.indexOf(note[0]);
  if(note[1]=== "#") return narr[ind+1].concat('b');
  if(note[1]=== "b") return narr[ind-1].concat('#')
}