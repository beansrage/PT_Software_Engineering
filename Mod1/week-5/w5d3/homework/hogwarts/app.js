$(() => {
            //Y1\\
    const $container = $('div')                     // declares a new dix
    $container.append('<h1>Hogwarts</h1>');        // appending an h1 element with inner text of Hogwarts to cotainer div

            //Y2\\
    $container.append('<h2>Bob</h2>');              // appends new h2 to container
    $container.append('<h3>Slytherin</h3>');        // appends new h3 to container
    $container.append('<h4 class="wolf">Zele</h4>');        // appends new h4 to container
    $container.append('<h4>Hawthorn Wand with Dragon Heartstring Core</h4>');   //apends new h4 to container

            //Y3\\
    $container.append('<ul storage="trunk"></ul>')
    $('ul').append('<li>Butter Beer</li>')
    $('ul').append('<li class="secret">Invisibility Cloak</li>')
    $('ul').append('<li class="secret">Magic Map</li>')
    $('ul').append('<li class="secret">Time Turner</li>')
    $('ul').append('<li class="wolf">Leash</li>')
    $('ul').append('<li>Bertie Bott\'s Every Flavor [Jelly] Beans.</li>')

            //Y4\\
    $container.append('<h5>Spring 2017</h5>')
    $container.append('<table> <tr> <th>Day</th> <th>Classes</th> </tr> <tr> <th>Monday</th> <th>Potions</th> </tr> <tr> <th>Tuesday</th> <th>Transfiguration</th> </tr> <tr> <th>Wensday</th> <th>History of Magic</th> </tr><tr> <th>Thursday</th> <th>Hexs</th> <tr> <th>Friday</th> <th>Dark Arts</th> </tr></tr></table>')

            //Y5\\
    $('h4').eq(1).remove();
    $('li').eq(0).remove();
    $('h4.wolf').after('<h4>Holly Wand with Unicorn Hair Core<h4>');
    $('h4').eq(1).css('color','turquoise');
    $('h4.wolf').appendTo('ul');
    $('h4.wolf').appendTo('h3');


            //Y6\\
    
});