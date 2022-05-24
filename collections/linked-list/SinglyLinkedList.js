import Node from '../node.js';

export class SLNode extends Node {
    #next = null;
    get Next() { return this.#next; }
    set Next(node) { this.#next = node; }
    constructor(data) {
        super(data);
    }
    hasNext() { return this.Next != null; }    
}

export default class SinglyLinkedList{
    #head;
    #tail;
    length = 0.0;
    get Head() { return this.#head; }
    set Head(node) { 
        if(!(node instanceof SLNode))
            throw new Error('Invalid node type');
        this.#head = node;
    }
    get Tail() { return this.#tail; }
    set Tail(node) { 
        if(!(node instanceof SLNode))
            throw new Error('Invalid node type');
        this.#tail = node;
    }

    constructor() {
        this.#head = null;
        this.#tail = null;
    }
    isEmpty(){ return this.Head === null; }

    add(data,position = null) {
        if(position !== null && (position < 1 || position-1 > this.length) )
            throw new Error('Invalid position');

        if(this.isEmpty()){
            this.Head = new SLNode(data);
            this.Tail = this.Head;
        }else if(position !== null){
            let newNode = new SLNode(data);
            if(position === 1){
                // console.log(this.Head.Next.Data);
                newNode.Next = this.Head;
                // console.log(this.Head.Next.Data);
                this.Head = newNode;
            }else{
                let tmp = this.Head;
                for(let i=1; i < position-1; i++){
                    tmp = tmp.Next; 
                }
                newNode.Next = tmp.Next;
                tmp.Next = newNode;
                if((position-1) === this.length)
                    this.Tail = newNode;
            }
            
        }else{
            let newNode = new SLNode(data);
            this.Tail.Next = newNode;
            this.Tail = newNode;
        }
        this.length++;
    }

    toString() { 
        let str = `${this.Head.Data}`
        let trav = this.Head;
        while (trav.hasNext()) {
            trav = trav.Next;
            str += `->${trav.Data}`;
        }
        return str;
    }
}