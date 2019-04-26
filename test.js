// function x(arr, startRow, startColumn, endRow, endColumn, startNumber) {
// 	if (startRow == endRow && startColumn === endColumn) {
// 		arr[startRow][startColumn] = startNumber
// 		return { arr, startNumber }
// 	}
// 	for (let col = startColumn; col < endColumn; col++) {
// 		arr[startRow][col] = startNumber
// 		startNumber++
// 	}

// 	for (let row = startRow; row < endRow; row++) {
// 		arr[row][endColumn] = startNumber
// 		startNumber++
// 	}

// 	for (let col = endColumn; col > startColumn; col--) {
// 		arr[endRow][col] = startNumber
// 		startNumber++
// 	}

// 	for (let row = endRow; row > startRow; row--) {
// 		arr[row][startColumn] = startNumber
// 		startNumber++
// 	}
// 	return { arr, startNumber }
// }

// let arr = [
// 	['a', 'a', 'a', 'a'],
// 	['a', 'a', 'a', 'a'],
// 	['a', 'a', 'a', 'a'],
// 	['a', 'a', 'a', 'a'],
// ]
// let y = x(arr, 0, 0, 3, 3, 1)
// console.log(y)

// function matrix(n) {
// 	let arr = []
// 	for (let i = 0; i < n; i++) {
// 		arr.push([])
// 	}

// 	let startNumber = 1
// 	let startRow = 0
// 	let startColumn = 0
// 	let endRow = n - 1
// 	let endColumn = n - 1
// 	while (startNumber <= n * n) {
// 		arr = x(arr, startRow, startColumn, endRow, endColumn, startNumber)
// 		startNumber += 4 * (endRow - startRow)
// 		startRow++
// 		startColumn++
// 		endRow -= 1
// 		endColumn -= 1
// 	}

// 	return arr
// }

// function x(arr, startRow, startColumn, endRow, endColumn, startNumber) {
// 	if (startRow == endRow && startColumn === endColumn) {
// 		arr[startRow][startColumn] = startNumber
// 		return arr
// 	}
// 	for (let col = startColumn; col < endColumn; col++) {
// 		arr[startRow][col] = startNumber
// 		startNumber++
// 	}

// 	for (let row = startRow; row < endRow; row++) {
// 		arr[row][endColumn] = startNumber
// 		startNumber++
// 	}

// 	for (let col = endColumn; col > startColumn; col--) {
// 		arr[endRow][col] = startNumber
// 		startNumber++
// 	}

// 	for (let row = endRow; row > startRow; row--) {
// 		arr[row][startColumn] = startNumber
// 		startNumber++
// 	}
// 	return arr
// }

function matrix(n) {
	let results = []
	for (let i = 0; i < n; i++) {
		results.push([])
	}
	let startRow = 0
	let startColumn = 0
	let endRow = n - 1
	let endColumn = n - 1
	let counter = 1

	while (startRow <= endRow && startColumn <= endColumn) {
		for (let col = startColumn; col <= endColumn; col++) {
			results[startRow][col] = counter
			counter++
		}
		startRow++

		for (let row = startRow; row <= endRow; row++) {
			results[row][endColumn] = counter
			counter++
		}

		endColumn--
	}

	return results
}
