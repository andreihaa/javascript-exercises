class Node {
    next;
    val; 
    constructor (param){
        this.val = param; 
    }
}

class Queue { 
    head;
    tail;
    enqueue(num){
        if(!this.head){
            this.head = new Node(num); 
            this.tail = this.head; 
        } 
        else{
           const nextNode = new Node(num);
           this.tail.next = nextNode;
           this.tail = this.tail.next; 

        //    let iter = head; 
        //    while(iter.next !== undefined){
        //    iter = iter.next;
        //     }
        //     iter.next = nextNode; 
        }
    }

    dequeue(){
        let headValue = this.head.val; 
        this.head = this.head.next; 
        return headValue; 
    }

    print(){
        let iter = this.head; 
        while(iter){   
            console.log(iter.val);
            iter = iter.next; 
        }
    }
}

// let queue = new Queue(); 
// queue.enqueue(5); 
// queue.enqueue(3); 
// queue.enqueue(2);
// queue.enqueue(1); 
// queue.print();
// queue.dequeue();
// queue.print(); 


module.exports = Queue;



