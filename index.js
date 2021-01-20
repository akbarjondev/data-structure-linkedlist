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
		const newNode = new Node(data)

		newNode.pointer = this.head
		this.head = newNode
		this.#size++
	}


}

const ll = new LinkedList()

ll.insert('A')
ll.insert('B')
ll.insert('C')
ll.insert('D')

ll.prepend('F')
ll.prepend('G')

// console.log(ll)
console.log(ll.getSize)
console.log(ll.displayNodes)