const obj = {
	a: {
		a: [
			{key: 'a', val: 'a1'}, 
			{key: 'b', val: 'b1'}
		],
		'a1': {
			a1Max: 10
		}

	},
	b: {
		b: [],
		b1: ['b11', 'b22', 'b33']
	}
}

//functie cu obj parametru. promise care sa returneze dupa 2 secunde valoarea de la 'b1' concatenata b11b22b33; 
//functie cu obj parametru. cand e apelata returneaza array cu toate cheile de la 'a'
//functie cu obj parametru. creaza o cheie numita b1max care sa contina count de chei de la b


function objectCall(obj){
    return new Promise ((res) => {
        setTimeout(() =>{
            obj.a.a1.a1Max = 12; 
            res(obj);
        }, 1000)
    })
}

// objectCall(obj)
	// .then((el) => {
	// 	console.log(el);
	// })

function objectCallAsync(obj){
	return new Promise((res, rej) => {
		setTimeout(() =>{
            obj.a.a1.a1Max = 12; 
            res(obj);
        }, 1000)
	})
}

objectCallAsync(obj).then((el) => console.log(el)); 

// const newAsync = obectCallAsync(obj);
// console.log(newAsync);

function joinValue (obj) {
	return new Promise((res, rej) => {
		const objJoin = obj.b.b1.join('')
		setTimeout(() => {
			res(objJoin); 
		},2000)
	})
}

// joinValue(obj)
// 	.then((el) => {
// 		console.log(el); 
// 	})

function callKeys (obj) {
	return new Promise ((res) => {
		setTimeout(() => {
			res(Object.keys(obj.a));
		},200)
	})
}

// callKeys(obj)
// 	.then((el) => {
// 		console.log(el); 
// 	})

function countKeys (obj) {
	// const objB = obj.map(function(el){
	// 	return obj.b; 
	// })
	// console.log(objB)

	return new Promise ((res) => {
		const b1Max = {}; 
		for(let key in obj.b){
			if(!b1Max[key]){
				b1Max[key] = 1;
			}
			else{
				b1Max[key]++
			}
		}
		res(b1Max); 
	})
}


// countKeys(obj)
// 	.then((el) => {
// 		console.log(el); 
// 	})


//// Extends? Super?
//// module.exports si require? e util sau e nice to have? 