//s is a line of music, represented as a string, where hashtags # represent emphasized beats. Create a function that returns if the line of music contains any syncopation.

const hasSyncopation = s => [...s].some((i, idx) => idx%2 && i === '#');