function Color(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`
}

Color.prototype.hex = function() {
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0){
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b}, ${a})`
}

// const color = new Color(255, 40, 100);
// color.hex();
// const color2 = new Color(100, 25, 120);
// color2.hex(); 


class Color {
    constructor(r, g, b, name){
        this.r = r;
        this.g = g;
        this.b = b; 
        this.name = name; 
    }
    greet(){
        return `hello from ${this.name}`
    }
    innerRGB(){
        const {r, g, b} = this; // destructure the object. de ce facem asta? 
        return `${r}, ${g}, ${b}`
    }
    rgb(){
        return `rgb(${r}, ${g}, ${b})`
    }
    rgba(a = 1.0){
        return `rgb(${this.innerRGB()}, ${a})`
    }
    hex(){
        const {r, g, b} = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
}

const c1 = new Color(255, 67, 89, 'red'); 
// c1.greet(); 

