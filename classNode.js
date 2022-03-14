class Node {
    val;
    next;
    constructor (param){
        this.val = param; 
    }
}

let node1 = new Node('k'); 
let node2 = new Node(5); 

node1.next = node2; 

let node3 = new Node('z'); 

node3.next = node2; 
node1.next = node3;
 
let iter = node1; 

while (iter !== undefined) {
    console.log(iter.val); 
   iter = iter.next; 
}

console.log(node1); 