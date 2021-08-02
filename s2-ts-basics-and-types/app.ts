//const person:{ name:string; age:number; hobbies:string[]; role:[number, string]; } = {
  //name: 'Elias',
  //age: 30,
  //hobbies: ['Reading', 'Videogames'],
  //role: [2, 'author'],
//};

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Elias',
  age: 30,
  hobbies: ['Reading', 'Videogames'],
  role: Role.ADMIN,
};

let favoriteActivities:string[];
favoriteActivities = ['Reading'];

console.log(`My name is ${person.name}, and I am ${person.age} years old.`);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
