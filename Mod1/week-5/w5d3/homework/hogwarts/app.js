// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};


$(() => {
    let $container = $('#container')	
    console.log($container);
    $h1 = document.createElement('H1');
    let t = document.createTextNode('Hogwarts')
    $h1.appendChild(t);
    console.log($h1);
    $container.append($h1)
});