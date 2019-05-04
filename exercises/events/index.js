// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
	// Register an event handler
	on(eventName, callback) {
		if (!this[eventName]) {
			this[eventName] = [callback]
		} else {
			this[eventName].push(callback)
		}
	}

	// Trigger all callbacks associated
	// with a given eventName
	trigger(eventName) {
		if (!this[eventName]) return
		for (let i = 0; i < this[eventName].length; i++) {
			this[eventName][i]()
		}
	}

	// Remove all event handlers associated
	// with the given eventName
	off(eventName) {
		this[eventName] = false
	}
}

module.exports = Events
