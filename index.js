//****** CircularLinkedList ******//
const { CircularLinkedList } = require('./CircularLinkedList')

const cll = new CircularLinkedList()

cll.insert('A')
cll.insert('B')
cll.insert('C')
cll.insert('D')
cll.insert('E')
cll.insert('F')

// console.log(cll.getSize)

for(let d of cll) {
	console.log(d)
}


//****** SingleLinkedList ******//

// const { LinkedList } = require('./SingleLinkedList')
// 
// const ll = new LinkedList()
// 
// ll.insert('A')
// ll.insert('B')
// ll.insert('C')
// ll.insert('D')
// 
// ll.prepend('F')
// ll.prepend('G')

// console.log(ll)
// console.log(ll.getSize)
// console.log(ll.displayNodes)


// for(let d of new LinkedList) {
// 	console.log(d)
// }

// console.log(...new LinkedList)


//****** DoublyLinkedList ******//

// const { DoublyLinkedList } = require('./DoublyLinkedList')
// const dll = new DoublyLinkedList()
// 
// dll.insert('A')
// dll.insert('B')
// dll.insert('C')
// 
// console.log(dll.getSize)
// console.log(dll.head.next.next)

