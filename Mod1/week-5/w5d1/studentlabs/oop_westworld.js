const Host = {
    name: 'Roget',
    age: 3000000000,
    occupation: 'creator of Roget\'s Thesaurus.',
    saySpecs: function () {
        console.log('My name is ' + this.name + ' My occupation is ' + this.occupation)
    }
};
Host.saySpecs();

class BasicHost {
    constructor(name, occupation) {
        this.name = name
        this.occupation = occupation
    }
}
const host1 = new BasicHost("Roget", "creator of Roget's Thesaurus"); 
console.log(host1);


// The 'new" keyword 
// - creates a new empty object {}
// - sets the value of 'This' to the new empty object
// - calles the constructor method