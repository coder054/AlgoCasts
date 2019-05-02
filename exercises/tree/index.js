// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(a) {
		this.data = a
		this.children = []
	}

	add(data) {
		this.children.push(new Node(data))
	}

	remove(data) {
		this.children = this.children.filter(item => {
			return item.data !== data
		})
	}
}

class Tree {
	constructor() {
		this.root = null
	}

	traverseBF(fn) {
		let arr = [this.root]

		while (arr.length > 0) {
			let first = arr.shift()
			arr.push(...first.children)
			fn(first)
		}
	}

	traverseDF(fn) {
		let arr = [this.root]
		while (arr.length) {
			let first = arr.shift()
			arr.unshift(...first.children)
			fn(first)
		}
	}
}

module.exports = { Tree, Node }
