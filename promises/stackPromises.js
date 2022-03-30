//class stack - functie de push, pop, max cu promises 

class Node {
    val;
    next;
    constructor(param){
        this.val = param 
    }
}

class Stack{
    head; 
    sum;
    count;
    constructor(){
        this.sum = 0;
        this.count = 0; 
    }
    push(num){
        return new Promise ((res,rej) => {
                let node = new Node(num);
                node.next = this.head;
                this.head = node; 
                this.sum = this.sum + num; 
                this.count ++;
                res(); 
        });  
    }
    pop(){
        return new Promise((res, rej) => {
            if(!this.head){
                rej('there is no node in the stack');
            }
            else{
                let val = this.head.val; 
                this.sum = this.sum - this.head.val;
                this.count --; 
                this.head = this.head.next;
                res(val)
            }
        })
    }
    max(){
        return new Promise((res, rej) => {
            if(this.head){
                let iter = this.head; 
                let max = 0; 
                while(iter !== undefined){
                    if(iter.val > max){
                        max = iter.val;
                    }
                    iter = iter.next; 
                }
                res(max); 
            }
            else{
                rej('there are no nodes'); 
            }
        })
    }
}

// const newStack = new Stack(); 

// newStack.push(3)
//     .then((el) => {
//         console.log('this is sum:', newStack.sum);
//         console.log('this is count:', newStack.count);
//         return newStack.push(2); 
//     })
//     .then(() => {
//         return newStack.max();
//     })
//     .then((el) => {
//         console.log('this is max:', el)
//         console.log('this is sum:', newStack.sum);
//         console.log('this is count:', newStack.count);
//         return newStack.push(6); 
//     })
//     .then(() => {
//         return newStack.max();
//     })
//     .then((el) => {
//         console.log('this is max:', el);
//         console.log('this is sum:', newStack.sum);
//         console.log('this is count:', newStack.count);
//         return newStack.pop(); 
//     })
//     .then((el) => {
//         return newStack.max(); 
//     })
//     .then((el) => console.log('this is max:', el))
//     .catch((err) => console.log(err)); 

// newStack.pop()
//     .then((el) => {
//         console.log(el); 
//     })
//     .catch((err) => {
//         console.log(err); 
//     })

// newStack.max()
//     .then((el) => {
//         console.log(el); 
//     })
//     .catch((err) => {
//         console.log(err); 
//     })

//add 3/ wait 2 seconds/ remove 3 


async function que(){
    const newStack = new Stack(); 
    const pushPromise = await new Promise ((res, rej) => {
        setTimeout(() => {
            res(newStack.push(3));
        }, 2000);
    })
    await pushPromise; 
    const popValue = await newStack.pop();
    console.log(popValue); 
}
que(); 