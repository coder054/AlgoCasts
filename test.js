function x(str) {
	let newstr = str.replace(/[^\w]/g, '').toLowerCase()
	let chars = {}
	for (let char of newstr) {
		chars[char] = chars[char] + 1 || 1
	}
	return chars
}

console.log(x('RAIL! SAFETY!'))
