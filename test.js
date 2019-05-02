function f() {
	let count = 0
	while (count <= 10) {
		console.log(count)
		count++
	}
	console.log('out of while loop')
	return count
}

console.log(f())
