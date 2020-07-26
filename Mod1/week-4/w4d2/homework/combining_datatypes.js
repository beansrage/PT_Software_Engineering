crayonBox={
    colors: ['blue ', 'green ','white ', 'orange ']
}
console.log(crayonBox.colors[3]);

bottle={
    cap: {
        material: 'plastic',
        color: 'purple'
    }
}
console.log(bottle.cap.material);

receipt = ['bills', 'dumb', candy = {name: 'sour', price: 0.50}, 'tacos']
console.log(receipt[2].price);

appartmentBuilding = ['hugh', 'beach', rooms = [1, 2, 3] ]
console.log(appartmentBuilding[2][2]);

function knit() {
    neckWear={
        item: 'scarf',
        size: '6ft'
    }
    console.log(neckWear.item);
}
knit();

function cSelector() {
    crayonBox={
        colors: ['blue ', 'green ','white ', 'orange ']
    }
    console.log(crayonBox.colors[3]);
}
cSelector();

function powerButton() {
    
    function options () {
        console.log('select a song ');
    }
    return options()
}

powerButton();



vM={
    snacks: [Bar = {name: 'MarZ', price: 2.93},chips = {name: 'tortas', price: 1.30},drink = {name: 'SiiiP', price: 0.75}], 
    vend (input) {
        console.log('vending', vM.snacks[input]);
      }
}
vM.vend(1);






///////////////////Callbacks

function add(x, y) {
    x=1; 
    y=2
    return (console.log(x+y))
}
add();

function subtract(x, y) {
    x=4;
    y=2
    return (console.log(x-y))
}
subtract();

function multiply(x, y) {
    x=4;
    y=2
    return (console.log(x*y))
}
multiply()

function divide (x, y) {
    x=4;
    y=2
    return (console.log(x / y))
}
divide()
console.log('')

function calculate (n1,n2,operate) {
    function operate() {
        n1
        n2
        this.number = n1*n2
        return console.log(this.number)
    }
    operate()
}
calculate(1,5)
calculate(12,37)
calculate(89,14)
calculate(6,0)


const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();


// foo();

// const foo ()=>{
//     console.log('hi');
// }
// function foo has already been defined, which means theres already a function with the name foo


 