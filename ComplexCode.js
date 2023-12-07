/* 
   Filename: ComplexCode.js
   Content: A sophisticated and elaborate JavaScript code
   Description: This code performs a variety of actions including creating objects, manipulating arrays, making API requests, and implementing complex algorithms.
*/

// Object definition - Animal
class Animal {
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  eat() {
    return `${this.name} is eating.`;
  }

  sleep() {
    return `${this.name} is sleeping.`;
  }
}

// Object instantiation
const lion = new Animal("Leo", 5, "Lion");
const elephant = new Animal("Ellie", 10, "Elephant");

// Array manipulation
const animals = [lion, elephant];
animals.push(new Animal("Giraffe", 7, "Giraffe"));

// Performing asynchronous operations using Promises
const fetchFromAPI = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

// Making an API request
const apiUrl = "https://api.example.com/data";
fetchFromAPI(apiUrl).then((result) => {
  console.log(result);
});

// Implementing a complex algorithm - Bubble Sort
const bubbleSort = (arr) => {
  const n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

const numbers = [5, 2, 8, 3, 1];
console.log(bubbleSort(numbers));

// More complex logic
const calculateDiscount = (itemPrice, discountPercentage) => {
  if (typeof itemPrice !== "number" || typeof discountPercentage !== "number") {
    throw new Error("Invalid input.");
  }

  const discountedPrice = itemPrice * (1 - discountPercentage);
  return discountedPrice.toFixed(2);
};

try {
  const laptopPrice = 1000.0;
  const discountPercentage = 0.2;
  const discountedPrice = calculateDiscount(laptopPrice, discountPercentage);
  console.log(`Discounted price: $${discountedPrice}`);
} catch (error) {
  console.error(error.message);
}

// More complex logic
const findLargestNumber = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error("Invalid input.");
  }

  let largestNumber = -Infinity;
  for (let number of numbers) {
    if (typeof number !== "number") {
      throw new Error("Invalid input.");
    }
    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  return largestNumber;
};

try {
  const numbersArray = [3, 9, 5, 1, 7];
  const largestNumber = findLargestNumber(numbersArray);
  console.log(`Largest number: ${largestNumber}`);
} catch (error) {
  console.error(error.message);
}

// ... (continue adding more sophisticated and complex code here)