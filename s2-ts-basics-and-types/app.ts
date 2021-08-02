// const person:{ name:string; age:number; } = {
const person = {
  name: 'Elias',
  age: 30,
  hobbies: ['Reading', 'Videogames'],
};

let favoriteActivities:string[];
favoriteActivities = ['Reading'];

console.log(`My name is ${person.name}, and I am ${person.age} years old.`);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
