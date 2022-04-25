const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
  name: {
  type: String,
  required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit ({
  name: 'Peach',
  rating: 8,
  review: "I like peaches!"
});

// fruit.save();

// const kiwi = new Fruit ({
//   name: 'Kiwi',
//   rating: 8,
//   review: "Awesome fruit!"
// });
//
// const orange = new Fruit ({
//   name: 'Orange',
//   rating: 5,
//   review: "Sour but I like it!"
// });
//
// const banana = new Fruit ({
//   name: 'Banana',
//   rating: 7,
//   review: "Weird texture"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully added the fruits to fruitsDB");
//   }
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const strawberry = new Fruit ({
  name: 'Strawberry',
  rating: 8,
  review: "Very tasty!"
});

strawberry.save();

const Person = mongoose.model("Person", personSchema);

Person.updateOne({name: "John"}, {favoriteFruit: strawberry}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Update successfully!");
  }
});

// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple
// });

// person.save();

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  } else {
    fruits.forEach(function(fruit){
    console.log(fruit.name);
  });
}});
//
// Fruit.deleteOne({name: "Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted!");
//
//
//   }
// });
