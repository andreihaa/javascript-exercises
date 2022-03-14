class Node {
    left;
    right; 
    value; 
    constructor(param){
        this.value = param; 
    }
}

class Tree {
    head;
    constructor(param){
        this.head = new Node(param); 
    }
    add(number){
        let newNode = new Node(number); 
        let iter = this.head; 
        while(iter){
            if(number > iter.value){
                if(iter.right === undefined){
                    iter.right = newNode; 
                    break;
                }
                else{
                    iter = iter.right; 
                }
            }
            else{
                if(iter.left === undefined){
                    iter.left = newNode; 
                    break;
                }
                else{
                iter = iter.left; 
                }
            }
        }
    }
    print(node){
        if(!node) {
            return;
        }
        else {
            this.print(node.left);
            this.print(node.right); 
            console.log(node.value); 
        }
    }
}

const tree = new Tree(5); 
tree.add(2); 
tree.add(7);
tree.add(3);
tree.add(6);
tree.add(8);
tree.add(4);
tree.add(1);
tree.print(tree.head); 