function Animal(name, age, color, legs){
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.eat = function eat(food){
        console.log(`${name} eats ${food}`);
    }

    this.walk = function walk(distance){
        console.log(`${name} walked ${distance} meters`)
    }
}

function Animal2(name, age, color, legs){
    function eat(food){
        console.log(`${name} eats ${food}`);
    }

    function walk(distance){
        console.log(`${name} walked ${distance} meters`)
    }

    return {
        name,
        age,
        color,
        legs,
        eat,
        walk
    }
}

const cat = new Animal('cat', 3, 'white', 4);

cat.walk(5);
cat.eat('burger')


const dog = Animal2('dog', 3, 'black', 4)
dog.walk(3);
dog.eat('pizza')


console.log(cat)
console.log(dog)