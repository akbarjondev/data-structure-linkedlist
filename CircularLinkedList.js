class Node {

	data
	next
	prev

	constructor(data, prev = null, next = null) {
		this.data = data
		this.prev = prev
		this.next = next
	}
}

class CircularLinkedList {

	#size = 0
	head
	tail

	insert(data) {
		const newNode = new Node(data) // B

		if(!this.#size) {

			this.head = newNode
			this.tail = newNode

			this.head.next = this.tail
			this.head.prev = this.tail

			this.tail.next = this.head
			this.tail.prev = this.head
		
		} else {

			let head = this.head // A
			let tail = this.tail // B

			newNode.next = head // C.next = A
			newNode.prev = tail // C.prev = B

			tail.next = newNode // Tail(B).next = C
			this.tail = newNode // Tail(B)-> C

			head.prev = newNode
		}

		this.#size++
	}

}

module.exports.CircularLinkedList = CircularLinkedList
