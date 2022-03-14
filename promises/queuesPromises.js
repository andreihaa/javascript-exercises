class Node {
    val;
    next;
    constructor(param){
        this.val = param; 
    }
}

class Queue {
    head;
    tail;
    queue(value){
        return new Promise ((res, rej) => {
            if(!this.head){
                this.head = new Node(value);
                this.tail = this.head; 
            }
            else{
                //d  c <-- b <-- a
                let newNode = new Node(value)
                this.tail.next = newNode; 
                this.tail = this.tail.next;
            }
            res(this.head); 
        })
    }
    dequeue(){
        return new Promise ((res, rej) => {
            if(!this.head){
                rej('there is no head in the list')
            }
            else{
                const headValue = this.head.val;
                this.head = this.head.next;
                res(headValue);
            }
        })
    }
}

// const newQueue = new Queue(); 

// newQueue.queue(6)
//     .then((el) => {
//        return newQueue.queue(3); 
//     })
//     .then((el) => {
//         return newQueue.dequeue() 
//     })


//add 3/ wait 2 seconds/ remove 3 

// async function que(){
//     let newQueue2 = new Queue(); 
//     await newQueue2.queue(3); 
//     await new Promise((res, rej) => {
//         setTimeout(() => {
//             res();
//         }, 200)
//     })
//     const asyncFunction = await newQueue2.dequeue(); 
//     console.log(asyncFunction);
// }

// que(); 


// (async () => {
//     let newQueue2 = new Queue(); 
//     await newQueue2.queue(3); 
//     await new Promise((res, rej) => {
//         setTimeout(() => {
//             res();
//         }, 200)
//     })
//     const asyncFunction = await newQueue2.dequeue(); 
//     console.log(asyncFunction);
// })()