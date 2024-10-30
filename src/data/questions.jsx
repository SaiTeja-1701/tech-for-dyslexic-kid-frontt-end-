import skyImage from '../assets/quiz_images/sky.jpg';
import dogImage from '../assets/quiz_images/dog.jpg';
import bananaImage from '../assets/quiz_images/banana.jpg';
import appleImage from '../assets/quiz_images/apple.jpg';
import yellowImage from '../assets/quiz_images/yellow.jpg';
export const questions = {
    level1: [
      { question: "What color is the sky?", options: ["Blue", "Green", "Yellow", "Pink"], answer: "Blue", image: skyImage },
      { question: "Which animal is this?", options: ["Cat", "Dog", "Rabbit", "Horse"], answer: "Dog", image: dogImage },
      { question: "What fruit is this?", options: ["Apple", "Banana", "Orange", "Grapes"], answer: "Banana", image: bananaImage},
      { question: "What is the color of a ripe apple?", options: ["Green", "Red", "Blue", "Yellow"], answer: "Red", image: appleImage },
      
      { question: "Identify this color", options: ["Red", "Blue", "Yellow", "Green"], answer: "Yellow", image: yellowImage }
      // Add more questions as needed for level 1
    ],
    level2: [
      { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
      { question: "Which letter comes after A?", options: ["B", "C", "D", "E"], answer: "B" },
      { question: "Which shape has three sides?", options: ["Circle", "Triangle", "Square", "Rectangle"], answer: "Triangle", image: "/path/to/triangle-image.png" },
      { question: "What number is this?", options: ["2", "5", "7", "9"], answer: "5", image: "/path/to/number5-image.png" },
      { question: "What is 1 + 1?", options: ["2", "11", "1", "5"], answer: "2" }
      // Add more questions for level 2
    ],c
    level3: [
      { question: "What animal makes a 'meow' sound?", options: ["Dog", "Cow", "Cat", "Sheep"], answer: "Cat", image: "/path/to/cat-image.png" },
      { question: "What shape is a wheel?", options: ["Square", "Triangle", "Circle", "Rectangle"], answer: "Circle", image: "/path/to/wheel-image.png" },
      { question: "What is 5 - 3?", options: ["1", "2", "3", "4"], answer: "2" },
      { question: "Which one is a vegetable?", options: ["Apple", "Banana", "Carrot", "Orange"], answer: "Carrot", image: "/path/to/carrot-image.png" },
      { question: "Identify this animal", options: ["Elephant", "Giraffe", "Zebra", "Lion"], answer: "Elephant", image: "/path/to/elephant-image.png" }
      // Add more questions for level 3
    ],
  };
  
  