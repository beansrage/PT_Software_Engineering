
                        //////////Jquery link check\\\\\\\\\\\\\
                            //linked
                    // if (typeof jQuery == 'undefined'){
                    //     console.log('oops! I still have to link my jQuery properly!');
                    // } else {console.log('I did it! I linked jQuery and this js file!')};


$(() => {
            //Y1\\
    const $container = $('div')
    const $h1 = $('<h1>').text('Hogwarts')
    // $container.append($h1)
            //Y2\\
    const $h2 = $('<h2>').text('Beans')
    const $h3 = $('<h3>').text('Slytherin')
    const $h4 = $('<h4>').text('Zele')
    $h4.attr('class', 'Wolf')
    const $h42 = $('<h4>').text('Hawthorn Wand with Dragon Heartstring Core')
            //Y3\\
    const $ul = $('<ul>').attr('Storage', 'Trunk')
    const $bB = $('<li>').text('Butterbeer')
    const $iC = $('<li>').text('Invisibilty Cloak').attr('class', 'secret')
    const $mM= $('<li>').text('Magic Map').attr('class', 'secret')
    const $l= $('<li>').text('Leash').attr('class', 'Wolf')
    const $tT= $('<li>').text('Time Turner').attr('class', 'secret')
    let $l6 = document.createElement('li')
    let $l6T ='Bertie Bott\'s Every Flavor [Jelly] Beans.'
            //Y4\\
    const $h5 = $('<h5>').text('Spring 2017')
    const $tB = $('<table>')
    const $tE = $('<th>').text('Day')
    const $tC = $('<th>').text('Classes')
    const $tR = $('<tr>')

    const $tR1 = $('<tr>') //Monday
        const $tD11 = $('<td>').text('Monday: ')
        const $tD12 = $('<td>').text('Herbology')

    const $tR2 = $('<tr>') //Tuesday
        const $tD21 = $('<td>').text('Tuesday: ')
        const $tD22 = $('<td>').text('Charms')    

    const $tR3 = $('<tr>') //Wensday
        const $tD31 = $('<td>').text('Wensday: ')
        const $tD32 = $('<td>').text('Transfiguration')

    const $tR4 = $('<tr>') //Thursday
        const $tD41 = $('<td>').text('Thursday: ')
        const $tD42 = $('<td>').text('Potions')

    const $tR5 = $('<tr>') //Friday
        const $tD51 = $('<td>').text('Friday: ')
        const $tD52 = $('<td>').text('Dark Arts')

        //Appenditures\\
    $container.append($h1,$h2,$h3,$h4,$h42,$ul)
    $($ul).append($bB, $iC, $mM, $tT, $l,$l6)
    $($l6).append($l6T)
    $container.append($h5, $tB)
        //append to table Y4\\
    $tB.append($tR,$tR1,$tR2,$tR3,$tR4,$tR5)
        //append to tr Y4\\
    $tR.append($tE, $tC)
    $tR1.append($tD11,$tD12)
    $tR2.append($tD21,$tD22)
    $tR3.append($tD31,$tD32)
    $tR4.append($tD41,$tD42)
    $tR5.append($tD51,$tD52)




















});
                    
        

                    




























//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
///////////////////////////old ways///////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// // if (typeof jQuery == 'undefined'){
// //     console.log('oops! I still have to link my jQuery properly!');
// //   } else {console.log('I did it! I linked jQuery and this js file!')};


// $(() => {
//     $('div')
//     let $container = $('#container')	
// ////////////H1
//     $h1 = document.createElement('H1');
//     let t = document.createTextNode('Hogwarts')
//     $container.append($h1)
//     $h1.append(t);
// ////////////H2
//     $h2 = document.createElement('H2');
//     let tH2 = document.createTextNode('Bob')
//     $h2.appendChild(tH2);
//     $container.append($h2)
// /////////////H3
//     $h3 = document.createElement('H3');
//     let tH3 = document.createTextNode('Slytherin')
//     $h3.appendChild(tH3);
//     $container.append($h3)
// /////////////H4
//     $h4 = document.createElement('H4');
//     let tH4 = document.createTextNode('Zele')
//     $h4.className = 'Wolf'
//     $h4.appendChild(tH4);
//     $container.append($h4)
// /////////////H5
//     $h5 = document.createElement('H5')
//                 ////Broken at year 5\\\
//     // let tH5 = document.createTextNode('Hawthorn Wand with Dragon Heartstring Core wand')
//     // $h5.appendChild(tH5);   
//     // $container.append($h5)

//     //////New wand!\\\\\\\\\\\
//     let tH5 = document.createTextNode('Holly Wand with Unicorn Hair Core')
//     $h5.style.color = '#4B0082'
//     $h5.appendChild(tH5);   
//     $container.append($h5)
    
    
    
// //////////////////////////////
// //////////////////////////////
// /////////Year 3///////////////
//     $uL = document.createElement('ul');
//     document.getElementsByTagName('ul')[0]; //Get
//     let att = document.createAttribute('Storage');
//     att.value = 'trunk'; //Set
//     $uL.setAttributeNode(att);
//     $container.append($uL)
    
//     //      'Removed" for year 5  \\
//     // $li = document.createElement('li');
//     // let lt = document.createTextNode('butter beer');
//     // $uL.append(lt)   
    
    
//     $li2 = document.createElement('li');
//     let lt2 = document.createTextNode('invisibility cloak');
//     $li2.className = 'secret'
//     $uL.append($li2)
//     $li2.appendChild(lt2)

//     $li3 = document.createElement('li');
//     let lt3 = document.createTextNode('magic map');
//     $li3.className = 'secret'
//     $uL.append($li3)
//     $li3.appendChild(lt3)

//     $li4 = document.createElement('li');
//     let lt4 = document.createTextNode('time turner');
//     $li4.className = 'secret'
//     $uL.append($li4)
//     $li4.appendChild(lt4)

//     $li5 = document.createElement('li');
//     let lt5 = document.createTextNode('leash');
//     $li5.className = 'Wolf'
//     $uL.append($li5)
//     $li5.appendChild(lt5)

//     $li6 = document.createElement('li');
//     let lt6 = document.createTextNode('Bertie Bott\'s Every Flavor [Jelly] Beans.');
//     $uL.append(lt6)
//  //////////////////////////
//  ///////////Year 4/////////
//  //////////////////////////

//  //In html, not sure if we were supposed to create dynamically or what


//  //////////////////////////
//  ///////////Year 6/////////
//  //////////////////////////
//  $('H5').hide(slow)


// });
