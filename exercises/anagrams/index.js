// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	let charsA = x(stringA)
	let charsB = x(stringB)

	if (Object.keys(charsA).length !== Object.keys(charsB).length) {
		return false
	}

	for (let char in charsA) {
		if (!charsB[char] || charsB[char] !== charsA[char]) {
			return false
		}
	}

	return true
}

function x(str) {
	let newstr = str.replace(/[^\w]/g, '').toLowerCase()
	let chars = {}
	for (let char of newstr) {
		chars[char] = chars[char] + 1 || 1
	}
	return chars
}
module.exports = anagrams
