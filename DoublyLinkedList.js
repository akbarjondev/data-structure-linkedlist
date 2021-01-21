class Node {

	data
	next
	prev

	constructor(data) {
		this.data = data
		this.next = null
		this.prev = null
	}
}


class DoublyLinkedList {

	head
	#size = 0

	constructor() {
		this.head = null
	}

	insert(data) {
		const node = new Node(data)

		if(!this.head) {
			this.head = node
		} else {
			let tail = this.head

			while(tail.next) {
				tail = tail.next
			}

			node.prev = tail
			tail.next = node
		}

		this.#size++
	}

	get getSize() {
		return this.#size
	}

}

module.exports.DoublyLinkedList = DoublyLinkedList
