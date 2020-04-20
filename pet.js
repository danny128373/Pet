// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

const pet = {
  name: "Lucy",
  species: "dog",
  nicknames: ["Lucyboo", "Lucy Marie", "Lucille"],
  age: 6,
  bark: function () {
    window.alert("WOOF!");
  },
  whine: function () {
    window.alert("BOW WOW!");
  },
  playful: function () {
    window.alert("ARF!");
  }
}

pet.bark();
pet.whine();
pet.playful();

// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this 
//keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method 
//that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.
pet.favoriteToys = [];
pet.play = (toy) => {
  if (toy.includes("ball")) {
    pet.favoriteToys.push(toy);
  }
}

pet.play("Tennis ball");
console.log(pet.favoriteToys);