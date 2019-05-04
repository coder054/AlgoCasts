// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin = i

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) {
				indexOfMin = j
			}
		}

		if (indexOfMin !== i) {
			let temp = arr[i]
			arr[i] = arr[indexOfMin]
			arr[indexOfMin] = temp
		}
	}

	return arr
}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge }
