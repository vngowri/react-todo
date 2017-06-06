function add (a, b) {
    return a + b;
}

console.log(add(2,2));

var toAdd = [9, 9];

console.log(add(...toAdd));

var person = ['Andrew', 25];
var person2 = ['Jay', 35];

function printGreeting(name, age) {
    console.log('Hi' + name + ', you are '+ age);
}

printGreeting(...person);
printGreeting(...person2);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
    console.log('Hi' + name);
});