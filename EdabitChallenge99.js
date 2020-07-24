//Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA after transcription. DNA has the bases A, T, G and C, while RNA has U in place of T and all of the other bases remains the same.

function dnaToRna(dna) {
		const converted = {'A': 'U', 'T': 'A', 'C': 'G', 'G': 'C'};
		return [...dna].map(i => converted[i]).join('');
}