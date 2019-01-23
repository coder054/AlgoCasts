// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, numberOfHash = 1) {
	if (numberOfHash > 2* n - 1) return
	printOneLine(2 * n - 1, numberOfHash)
	numberOfHash += 2
	pyramid(n, numberOfHash)

}

function printOneLine(totalCharacters, numberOfHash) {
	let numberOfSpaceOneSide = (totalCharacters - numberOfHash) / 2
	let str = ''
	for (let i = 0; i < numberOfSpaceOneSide; i++) {
		str += ' '
	}

	for (let i = 0; i < numberOfHash; i++) {
		str += '#'
	}


	for (let i = 0; i < numberOfSpaceOneSide; i++) {
		str += ' '
	}

	console.log(str)

}


module.exports = pyramid;
