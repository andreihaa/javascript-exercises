const arr = ["eat", "tea", "tan", "ate", "nat", "bat"]; 

function ifAnagrams(str1, str2){
    if(str1.length === str2.length){
        const sortedStr1 = str1.split('').sort().join();
        const sortedStr2 = str2.split('').sort().join();
        if(sortedStr1 === sortedStr2){
           return true; 
        }
        else{
           return false; 
        }
    }
    else{
        return false; 
    }
}

function compareAnagrams(arr){
    const anagrams = []
    const notAnagrams = []
    while(arr.length > 0){
        
    }
}

compareAnagrams(arr)
