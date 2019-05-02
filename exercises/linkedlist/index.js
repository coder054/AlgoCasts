// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}

class LinkedList {
	constructor() {
		this.head = null
	}

	insertFirst(data) {
		const n = new Node(data, this.head)
		this.head = n
	}

	size() {
		if (!this.head) return 0
		let count = 1
		let node = this.head
		while (node.next) {
			count++
			node = node.next
		}

		return count
	}

	getFirst() {
		return this.head
	}

	getLast() {
		if (!this.head) return null
		let node = this.head
		let last = node
		while (node.next) {
			last = node.next
			node = node.next
		}
		return last
	}

	clear() {
		this.head = null
	}

	removeFirst() {
		if (!this.head || !this.head.next) {
			this.clear()
			return
		}

		let node = this.head.next
		this.head = node
	}

	removeLast() {
		if (!this.head) return
		if (!this.head.next) {
			this.clear()
			return
		}
		let node = this.head
		while (node.next) {
			if (!node.next.next) {
				node.next = null
				return
			}
			node = node.next
		}
	}

	insertLast(data) {
		if (!this.head) {
			this.head = new Node(data)
			return
		}

		let node = this.head

		while (node) {
			if (!node.next) {
				node.next = new Node(data)
				return
			}
			node = node.next
		}
	}

	getAt(index) {
		if (index < 0) return null
		if (index === 0) return this.head
		if (!this.head) return null
		if (index > this.size() - 1) return null
		let node = this.head
		let count = 0
		while (node) {
			if (count === index) {
				return node
			}
			count++
			node = node.next
		}
	}

	removeAt(index) {
		if (!this.head) return
		if (index < 0) return
		if (index === 0) {
			this.removeFirst()
			return
		}

		if (index > this.size() - 1) return
		let prev = this.head
		let node = prev.next
		let count = 1
		while (node) {
			if (count === index) {
				prev.next = node.next
			}
			count++
			prev = node
			node = node.next
		}
	}

	insertAt(data, index) {
		if (index < 0) return
		if (index === 0) {
			this.head = new Node(data, this.head)
			return
		}
		if (this.size() === 1) {
			this.head.next = new Node(data)
		}
		if (index > this.size() - 1) {
			this.insertLast(data)
			return
		}

		let count = 1
		let prev = this.head
		let node = prev.next
		while (node) {
			if (count === index) {
				prev.next = new Node(data, node)
				return
			}
			prev = node
			node = node.next
			count++
		}
	}
	forEach(fn) {
		if (!this.head) return
		let node = this.head
		while (node) {
			fn(node)
			node = node.next
		}
	}
}

module.exports = { Node, LinkedList }
