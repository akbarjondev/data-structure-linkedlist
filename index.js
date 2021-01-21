const { CircularLinkedList } = require('./CircularLinkedList')

const cll = new CircularLinkedList()

cll.insert('A') // 0
cll.insert('B') // 1
cll.insert('C') // 2
cll.insert('D') // 3
cll.insert('E') // 4
cll.insert('F') // 5

/****ITERATOR****/
// for(let d of cll) {
// 	console.log(d)
// }

/****GET NEXT****/
// console.log(cll.next(4))
// console.log(cll.next(4, 2))
