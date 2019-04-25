<<<<<<< HEAD
function x(str) {
	let newstr = str.replace(/[^\w]/g, '').toLowerCase()
	let chars = {}
	for (let char of newstr) {
		chars[char] = chars[char] + 1 || 1
	}
	return chars
}

console.log(x('RAIL! SAFETY!'))
=======
let a = -450
console.log(a.toString()[1])

let b = '-022'
console.log(parseInt(b))
>>>>>>> parent of 41484c9... fizzbuzz
