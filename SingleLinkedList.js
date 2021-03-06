class Node {

	data
	pointer

	constructor(data) {
		this.data = data
		this.pointer = null
	}
}


class LinkedList {

	head
	#size = 0

	constructor() {
		this.head = null
	}

	get getSize() {
		return this.#size
	}

	get displayNodes() {
		let output = ''
		let tail = this.head

		while(tail.pointer) {
			output += tail.data + '->'
			tail = tail.pointer
		}

		return output
	}

	insert(data) {
		const node = new Node(data)

		if(!this.head) {
			this.head = node
		} else {
			let tail = this.head

			while(tail.pointer) {
				tail = tail.pointer
			}

			tail.pointer = node
		}

		this.#size++
	}

	prepend(data) {
		[ this.head, this.head.pointer ] = [ new Node(data), this.head ]
		
		this.#size++
	}
}

module.exports.LinkedList = LinkedList
