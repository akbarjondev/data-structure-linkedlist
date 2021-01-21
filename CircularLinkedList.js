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

	next(id, howMuch = null) {
		let last = this.head
		let countId = 0

		if(!howMuch) {

			while(id !== countId) {
				last = last.next
				countId++
			}

			return last.data
		} else {

			let wrapper = []
			let tail = this.head
			let to = id + howMuch

			while(countId <= to) {
				if(id <= countId && id < (id + howMuch)) {
					wrapper.push(tail.data)
				}

				tail = tail.next
				countId++
			}

			return wrapper
		}
	}

	get getSize() {
		return this.#size
	}

	[Symbol.iterator]() {
		let from = 1
		let to = this.#size
		let tail = this.head.prev

		return {
			next: () => {
				
				tail = tail.next

				return {
					value: tail.data,
					done: from++ > to
				}
			}
		}

	}

}

module.exports.CircularLinkedList = CircularLinkedList
