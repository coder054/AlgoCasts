// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack')

class Queue {
	constructor(st1, st2) {
		this.st1 = new Stack()
		this.st2 = new Stack()
	}
	add(item) {
		this.st1.push(item)
	}
	remove() {
		while (this.st1.peek()) {
			this.st2.push(this.st1.pop())
		}
		let result = this.st2.pop()

		while (this.st2.peek()) {
			this.st1.push(this.st2.pop())
		}
		return result
	}
	peek() {
		while (this.st1.peek()) {
			this.st2.push(this.st1.pop())
		}
		let result = this.st2.peek()

		while (this.st2.peek()) {
			this.st1.push(this.st2.pop())
		}
		return result
	}
}

module.exports = Queue
