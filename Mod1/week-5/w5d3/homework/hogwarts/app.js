// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};


$(() => {
    $('div')
    let $container = $('#container')	
    console.log($container);
    ////////H1
    $h1 = document.createElement('H1');
    let t = document.createTextNode('Hogwarts')
    $container.append($h1)
    $h1.append(t);
    console.log($h1);
    ///////H2
    $h2 = document.createElement('H2');
    let tH2 = document.createTextNode('Bob')
    $h2.appendChild(tH2);
    console.log($h2);
    $container.append($h2)
    ///////H3
    $h3 = document.createElement('H3');
    let tH3 = document.createTextNode('Slytherin')
    $h3.appendChild(tH3);
    console.log($h3);
    $container.append($h3)
    ////////H4
    $h4 = document.createElement('H4');
    let tH4 = document.createTextNode('Wolf')
    $h4.className = 'Wolf'
     
    $h4.appendChild(tH4);
    console.log($h4);
    $container.append($h4)
     ////////H5
    $h5 = document.createElement('H5');
    let tH5 = document.createTextNode('Hawthorn Wand with Dragon Heartstring Core wand')
    $h5.appendChild(tH5);
    console.log($h5);
    $container.append($h5)

});




// Hawthorn Wand with Dragon Heartstring Core wand