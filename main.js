import SinglyLinkedList, {SLNode} from './collections/linked-list/SinglyLinkedList.js';

let list1 = new SinglyLinkedList();
list1.add(12);
list1.add(23,1);
list1.add(21,3);
list1.add(22);
list1.add(455,5);
list1.add(22);

console.log(list1.toString());
console.log(list1.Tail);