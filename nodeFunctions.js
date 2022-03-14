class Node {
    val;
    next;
    previous;
    constructor (param){
        this.val = param; 
    }
}

let node1 = new Node ('a');
let node2 = new Node ('b');
let node3 = new Node ('c');
// node1.previous= undefined; 
node2.previous = node1; 
node1.next = node2; 
node3.previous = node2; 
node2.next = node3;
// node3.next = undefined; 

// let node4 = new Node ('d');
// node3.next = node4; 
// node4.previous = node3; 
// let node5 = new Node ('e');
// node4.next = node5;
// node5.previous = node4; 
// let node6 = new Node ('f'); 
// node5.next = node6; 
// node6.previous = node5; 


// let iter = node2; 
// // let prev = node1; 

// while (iter !== undefined) {
//     console.log(iter); 
//     iter=iter.next; 
//     // prev=prev.previous; 
// }


// class Node {
//     val;
//     next;
//     constructor (param){
//         this.val = param; 
//         }
//     }

// class DoubleNode {
//     val;
//     next;
//     previous;
//     constructor (param){
//         this.val = param; 
//     }
// }

function nodeArray(arr) {
    
    // let node = new Node(arr[0]);
    // console.log(node); 
    // let node1 = new Node (arr[1]);
    // node.next = node1; 
    // node = node.next; 
    // node2 = new Node (arr[2]); 
    // node.next = node2; 
    // node = node.next; 

    // console.log(iter); 

    let iter = new Node(arr[0]);
    let head = iter; 
    let previousNode = head; 

    for (let i = 1; i < arr.length; i++){
        // console.log(arr[i]); 
        let node = new Node (arr[i])
        iter.next = node; 
        iter = iter.next;
        iter.previous = previousNode;
        previousNode = previousNode.next;
        // previousNode = head.previous
        }
        return head;
}

let numbers = ['a','b','c','d','e','f']; 
// console.log(nodeArray(numbers)); 
let nodeHead = nodeArray(numbers); 

function iterate(node) { 
    // console.log(node); 
    // console.log(node.next);
    // console.log(node.next.next); 
    // let curr = node; 
    // console.log(curr); 
    // curr = curr.next; 
    // console.log(curr); 
    // curr = curr.next; 
    // console.log(curr); 

    let curr = node;
    while (curr.next !== undefined) {
        console.log(curr.val); 
        curr = curr.next; 
    }
    console.log(curr.val);
    while(curr.previous !== undefined){
        console.log(curr.val);
        curr = curr.previous; 
    }
    console.log(curr.val);
}


iterate(nodeHead);

function deleteNode (node,number) {
    let curr = node;
    // console.log(node); 
    while (curr.next !== undefined){
        if (curr.next.val === number){
            curr.next = curr.next.next;
        }
        curr = curr.next; 
        // console.log(curr); 
        // if (curr.next !== undefined && curr.next.val === number) {
        //     console.log(curr.next.val);
        //     curr.next = curr.next.next;
        // }
    }
}
// deleteNode (nodeHead, 'b'); 
// console.log(nodeHead); 


function addNode (node, value) { 
    let curr = node;
    // console.log(node); 
    while (curr){
        if (curr.next === undefined){
            curr.next = new Node(value);
            break;
        }
        curr = curr.next;  
    }
}

// addNode(nodeHead, 'g'); 
// console.log(nodeHead.next.next.next.next); 


function countNode(node) {
    let curr = node; 
    let count = 0; 
    while (curr !== undefined){
        curr = curr.next; 
        count = count + 1; 
    }
    return count; 
}

// console.log(countNode(nodeHead)); 