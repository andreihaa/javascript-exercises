class Node {
    val;
    next;
    constructor (param) {
        this.val = param; 
    }
}

class Stack {
    head; 
    sum;
    count; 
    constructor () {
    this.sum = 0; 
    this.count = 0; 
    };
    push(num){
        let node = new Node (num); 
        node.next = this.head; 
        this.head = node;
        this.sum = this.sum + num;
        this.count = this.count + 1; 
        console.log('sum:',stack.sum, ' count:', stack.count); 
    };
    pop(){
        let val = this.head.val;
        this.sum = this.sum - this.head.val;
        this.head = this.head.next; 
        this.count = this.count - 1; 
        console.log('sum:',stack.sum, ' count:', stack.count); 
    };
    sum(){
        let sum = 0; 
        let iter = this.head; 
        while(iter !== undefined){
            sum = sum + iter.val; 
            iter = iter.next; 
        }
        return sum; 
    };
    count(){
        let count = 0; 
        let iter = this.head; 
        while(iter !== undefined){
            count = count + 1; 
            iter = iter.next; 
        }
    }
}






const stack = new Stack(); 
stack.push(1); 
stack.push(2); 
stack.push(3); 
stack.push(4); 
stack.pop(); 
stack.pop(); 


let iter = stack.head; 

// while(iter !== undefined) {
//     console.log(iter.val); 
//     iter = iter.next; 
// }



    

