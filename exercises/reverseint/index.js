// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let result = ''

	if (n.toString()[0] === '-') {
		result += '-'
	}

	for (let i = n.toString().length - 1; i >= 0; i--) {
		if (i === 0 && n.toString()[i] === '-') {
			continue
		} else {
			result += n.toString()[i]
		}
	}

	return parseInt(result)
}

module.exports = reverseInt
