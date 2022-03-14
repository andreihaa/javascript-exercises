class Node {
    next; 
    value; 
    constructor (param) {
        this.value = param; 
    }
}

class LinkedList{
    head;
    constructor (param){
        this.head = new Node(param);
    }
    add(num){
        const newNode = new Node(num); 
        let iter = this.head; 
        while(iter.next !== undefined){
            iter = iter.next; 
        }
        iter.next = newNode; 
    }
    print(){
        let iter = this.head; 
        let result = '';  
        while(iter.next !== undefined){
            // console.log(result); 
            result = result + iter.value + '-->';
            iter = iter.next;
        }
        result = result + iter.value;
        console.log(result); 
    }
    find(number){
        let iter = this.head;
        let count = 0; 
        while(iter !== undefined){
            if(number === iter.value){ 
                return count;
            }
            count = count + 1;
            iter = iter.next; 
        }
        return -1;
    }
    delete(number){
        let iter = this.head; 
        if(this.head.value === number){
           this.head = this.head.next;  
        }
        else{
            while(iter.next !== undefined){
                if(number === iter.next.value){
                    iter.next = iter.next.next; 
                    break;
                }
                iter = iter.next; 
            }
        }
    }
};


const list = new LinkedList(5); 
list.add(3);
list.add(6); 
list.add(1); 
list.print();
list.delete(6); 
list.print(); 
list.delete(1); 
list.print(); 
list.delete(5); 
list.print(); 

// console.log(list.find(6));