class Node {
    val;
    next;
    constructor(param){
        this.val = param; 
    }
}

// let node1 = new Node('a'); 
// let node2 = new Node('b'); 

// node1.next = node2; 
// console.log(node1); 

function createNode(value){
    const node = new Node(value); 
    node.next = undefined; 
    return node; 
}

function listFromArr(arr){
    let iter = new Node(arr[0]); 
    const head = iter; 
    for(let i = 1; i < arr.length; i++){
        const node = new Node(arr[i]); 
        iter.next = node; 
        iter = iter.next; 
    }
    return head; 
}
let values = ['ana','bogdi','cornel', 'dumi', 'ene', 'fane']; 
let nodeList = listFromArr(values); 
// console.log(nodeList.next.next.next); 



function newNode(node, value){
    return new Promise ((res, rej) =>{
        setTimeout(() => {
            let iter = node; 
            while(iter){
                if(iter.next === undefined){
                    iter.next = new Node(value);
                    break; 
                }
                iter = iter.next; 
            }
            res('added'); 
        }, 1000)
    })
}
// newNode(nodeList, 'george').then(() => {
//     let iter = nodeList; 
//     while(iter){
//         console.log(iter.val); 
//         iter = iter.next; 
//     }
// }); 


function findNode(node, value){
    return new Promise ((res, rej) => {
        setTimeout(() => {
            let iter = node; 
            let count = 0;
            while(iter){
                if(iter.val === value){
                    break; 
                }
                count++; 
                iter = iter.next; 
            }
            if(iter === undefined){
                rej('not found');
            }
            else{
                res(count); 
            }
        }, 500)
    })
}

// findNode(nodeList, 'corne').then((el) => console.log(el)).catch((el) => console.log(el)); 

function deleteNode(node, value){
    return new Promise ((res, rej) => {
        let iter = node;
        let found = false;
        while(iter.next){
            if(iter.next.val === value){
                iter.next = iter.next.next;
                found = true;
                break; 
            }
            iter = iter.next;
        }
        if(found){
            res('deleted');
        }
        else{
            rej('not found');
        }
    })
}

//deleteNode(nodeList, 'en').then((el) => console.log(el)).catch((err) => console.log(err))

//cauta ene, adauga george, cauta george, sterge george, cauta george

// findNode(nodeList, 'ene')
//     .then((el) => {
//         console.log(el);
//         return newNode(nodeList, 'george')
//     })
//     .then((el) => {
//         console.log(el);
//         return deleteNode(nodeList, 'george')
//     })
//     .then((el) => {
//         console.log(el); 
//         return findNode(nodeList,'george')
//     })
//     .catch((err) => {
//         console.log('error:', err)
//     })


async function run(){
    const res1 = await findNode(nodeList, 'ene'); 
    console.log(res1); 
    const res2 = await newNode(nodeList, 'george');
    console.log(res2); 
    const res3 = await findNode(nodeList, 'george'); 
    console.log(res3);
    return 'done';
}

run().then((el) => {console.log(el)}); 