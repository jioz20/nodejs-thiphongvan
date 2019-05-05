var products = [
    { name: 'A', quantity: 2, unitPrice: 100 },
    { name: 'B', quantity: 3, unitPrice: 20 },
    { name: 'C', quantity: 4, unitPrice: 600 },
]


var sum = products.reduce(function (current, products) {
    return current + products.unitPrice * products.quantity;
}, 0);


// console.log(sum);


var items = ['Tom', 'Bill', 'Kend'];

var regenar = items.reduce(function(current, products){
    return current + '<'  + products + '>';
},'');


// console.log(regenar);


var person = [
    {name: 'a', old: 24},
    {name: 'b', old: 18},
    {name: 'c', old: 51}
];


console.log(person);

var sort = person.sort(function(a, b){
    return b.old - a.old;
});

console.log(sort);


var sort = person.sort(function(a, b){
    return a.old - b.old;
});

console.log(sort);