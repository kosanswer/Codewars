/*
Consider the following class:

var Animal = { 
    name: "Cat", 
    numberOfLegs: 4 
}
Write a method that accepts a list of objects of type Animal, and returns a new list. 
The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

If an empty list is passed in, it should return an empty list back.
*/
function sortAnimal(animals) {
  // Check if the input list is empty
  if (animals.length === 0) {
    return [];
  }

  // Custom sorting function
  function customSort(a, b) {
    // Compare by number of legs
    if (a.numberOfLegs < b.numberOfLegs) {
      return -1;
    }
    if (a.numberOfLegs > b.numberOfLegs) {
      return 1;
    }

    // If the number of legs is the same, compare by name
    return a.name.localeCompare(b.name);
  }

  // Sort the animals using the custom sorting function
  const sortedAnimals = animals.slice().sort(customSort);

  return sortedAnimals;
}
