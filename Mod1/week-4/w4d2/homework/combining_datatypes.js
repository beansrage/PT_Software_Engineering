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
    snacks: [Bar = {name: 'MarZ', price: 2.93},chips = {name: 'tortas', price: 1.30},drink = {name: 'SiiiP', price: 0.75}]
}
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
function vend(a) {
    for (let i =0; i < 3; i++) {
        console.log(vM.snacks[i]);
        
 

}
}
vend();

