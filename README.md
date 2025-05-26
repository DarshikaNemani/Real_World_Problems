# Real_World_Problems
# Simple Recipe Manager

This is a basic JavaScript project that allows users to add and search for recipes using simple methods.

## Features

- Add new recipes with a dish name, instructions, and user name.
- Search for recipes based on keywords in the dish name.
- Display matching recipes with their ID, name, instructions, and the user who added them.

## Example Usage

```js
const myRecipe = new Recipe();
myRecipe.add("Samosa", "X, Y, Z", "Darshika");
myRecipe.add("Chai", "1,2,3", "Darshika");

myRecipe.search("Chai");    // Displays the Chai recipe
myRecipe.search("Khaman");  // Outputs "No recipe found!"
