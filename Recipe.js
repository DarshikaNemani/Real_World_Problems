class Recipe {
    constructor() {
        this.recipes = {};
        this.id = 0;
    }
    
    add(name, instruction, user) {
        this.id++;
        this.recipes[this.id] = {
            name: name,
            instruction: instruction,
            user: user,
        };
        console.log('Added');
    }

    search(keyword) {
        if (this.id === 0) {
            console.log("No recipes available!");
            return;
        }
        
        let found = false;
        for (let id in this.recipes) {
            if (this.recipes[id].name.includes(keyword)) {
                const name = this.recipes[id].name;
                const instruction = this.recipes[id].instruction;
                const user = this.recipes[id].user;
                console.log(`id: ${id} Dish name: ${name}, instructions: ${instruction}, entered by: ${user}`);
                found = true;
            }
        }
        
        if (!found) {
            console.log("No recipe found!");
        }
    }
}

const myRecipe = new Recipe();
myRecipe.add("Samosa", "X, Y, Z", "Darshika");
myRecipe.add("Chai", "1,2,3 ", "Darshika");

myRecipe.search("Chai");
myRecipe.search("Khaman");