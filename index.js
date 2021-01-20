const { LinkedList } = require('./SingleLinkedList')

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