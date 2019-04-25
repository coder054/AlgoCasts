// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, numberOfHash = 1) {
  if (numberOfHash > n) return
  printOneLine(numberOfHash, n - numberOfHash)
  numberOfHash++
  steps(n, numberOfHash)
}

function printOneLine(numberOfHash, numberOfSpace) {
  let str = ''
  for (let i = 0; i < numberOfHash; i++) {
    str += '#'
  }
  for (let i = 0; i < numberOfSpace; i++) {
    str += ' '
  }

  console.log(str)
}

////////////////////////////////////////////////
/// using for loop solution
// function steps(n, numberOfHash = 1) {
//   for (let i = 0; i < n; i++) {
//     printOneLine(i + 1, n - i - 1)
//   }
// }

// function printOneLine(numberOfHash, numberOfSpace) {
//   let str = ''
//   for (let i = 0; i < numberOfHash; i++) {
//     str += '#'
//   }
//   for (let i = 0; i < numberOfSpace; i++) {
//     str += ' '
//   }

//   console.log(str)
// }
// ///////////////////////////////////////////

module.exports = steps
