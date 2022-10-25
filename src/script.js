
//var people = [
//   { name: "Giorgi", age: 25, budget: 2000 },
//    { name: "Mari", age: 17, budget: 1000 },
//    { name: "Nika", age: 24, budget: 1500 }
//]

//for (let i = 0; i < people.length; i++) {
//console.log(people[i]) 
//}

//ForEach
//people.forEach(function(person) {
//console.log(person)
//})

//people.forEach(person => console.log(person))

//Map
//var newPeople = people.map(person => {
//return person.name
//})
//console.log(newPeople)

//var newPeople = people.map(person => "${person.name} (${person.age})")
//console.log(newPeople)

//var newPeople = people.map(person => person.age * 3)
//console.log(newPeople)

//Filter
//V1
//var adults = []
//for (let i = 0; i < people.length; i++) {
//   if (people[i].age >=18) {
//        adults.push(people[i])
//   }
//}
//console.log(adults)

//V2
//var adults = people.filter(person => {
//   if (person.age >= 18) {
//      return true
//   }
//  })
//console.log (adults)

//V3
//var adults = people.filter(person => person.age >= 18)
//console.log (adults)

//Reduce
//V1
//let amount = 0
//for (let i = 0; i < people.length; i++) {
//amount += people[i].budget
//}
//console.log(amount)

//V2
//var amount = people.reduce((total, person) => {
//    return total + person.budget
//}, 0)
//console.log(amount)


//V3
//var amount = people.reduce((total, person) => total + person.budget, 0)
//console.log(amount)

//Find
//var Giorgi = people.find(person => person.name === "Giorgi")
//console.log(Giorgi)

//FindIndex
//var GiorgiIndex = people.findIndex(person => person.name === "Girogi")
//console.log(Giorgi)

// ==========

//var newPeople = people
//.filter(person =>  person.budget > 1500)
//.map(person => {
//   return {
//       info: '${person.name} (${person.age})' ,
//        budget: person.budget
//    }
//})
//console.log(newPeople)


//function greet(name, lastName) {
//   console.log('Hello ' + name + ' ' + lastName)
//}

//greet('Jone', 'Smith');


//var bill = function(products, tax){
//    let total = 0;
//    for(let i = 0; i <products.length; i++){
//        total += products[i] + products[i] * tax;
//    }
//    return total;
//}

//console.log(bill([10,15,30], 0.2));

//let people = ['Giorgi' , 'Nika' , 'Mari'];

//people.forEach(function(){
//   console.log('something');
//})

//people.forEach((person, index) => {
//   console.log(index, person);
//});

let people = ['Giorgi' , 'Nika' , 'Mari'];

var logPerson = (person, index) => {
    console.log('${index} - Hello ${person}');
};

people.forEach(logPerson);