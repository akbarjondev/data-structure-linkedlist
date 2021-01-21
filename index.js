// SingleLinkedList
const { LinkedList } = require('./SingleLinkedList')

const ll = new LinkedList()

ll.insert('A')
ll.insert('B')
ll.insert('C')
ll.insert('D')

ll.prepend('F')
ll.prepend('G')

// console.log(ll)
// console.log(ll.getSize)
// console.log(ll.displayNodes)


// for(let d of new LinkedList) {
// 	console.log(d)
// }

// console.log(...new LinkedList)


// CircularLinkedList
// const { CircularLinkedList } = require('./CircularLinkedList')
// 
// const dll = new CircularLinkedList()
// 
// dll.insert('A')
// dll.insert('B')
// dll.insert('C')
// 
// console.log(dll)
