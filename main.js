import inquirer from 'inquirer';
import chalk from 'chalk';
//  Recipe Class
class Recipe {
    name;
    ingredients;
    instructions;
    constructor(name, ingredients, instructions) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
    displayRecipe() {
        console.log(chalk.greenBright(`\nRecipe: ${this.name}`));
        console.log(chalk.yellow(`Ingredients: ${this.ingredients.join(', ')}`));
        console.log(chalk.blue(`Instructions: ${this.instructions}`));
    }
}
// Category Class
class RecipeCategory {
    categoryName;
    recipes;
    constructor(categoryName, recipes) {
        this.categoryName = categoryName;
        this.recipes = recipes;
    }
    displayRecipes() {
        return this.recipes.map(recipe => recipe.name);
    }
    getRecipeByName(name) {
        return this.recipes.find(recipe => recipe.name === name);
    }
}
//  Recipe Catalog
class RecipeCatalog {
    categories = [];
    addCategory(category) {
        this.categories.push(category);
    }
    getCategoryNames() {
        return this.categories.map(category => category.categoryName);
    }
    getCategoryByName(name) {
        return this.categories.find(category => category.categoryName === name);
    }
}
// Function to display welcome message
function displayWelcomeMessage() {
    console.log(chalk.magentaBright('\n..........Welcome to the Food Recipes Catalog System!........~(""""")?....\n'));
}
// Function to display thank you message
function displayThankYouMessage() {
    console.log(chalk.magentaBright('\n.......Thank you for using the Food Recipes Catalog System!......\n'));
}
// Function to interact with user
async function runRecipeCatalog(catalog) {
    displayWelcomeMessage();
    const { category } = await inquirer.prompt([
        {
            type: 'list',
            name: 'category',
            message: 'Choose a category:',
            choices: catalog.getCategoryNames(),
        }
    ]);
    const selectedCategory = catalog.getCategoryByName(category);
    if (selectedCategory) {
        const { recipeName } = await inquirer.prompt([
            {
                type: 'list',
                name: 'recipeName',
                message: `Select a recipe from ${category}:`,
                choices: selectedCategory.displayRecipes(),
            }
        ]);
        const selectedRecipe = selectedCategory.getRecipeByName(recipeName);
        if (selectedRecipe) {
            selectedRecipe.displayRecipe();
        }
    }
    displayThankYouMessage();
}
//  Data of Different countries food recipes :
// Pakistani Recipes
const pakistaniRecipes = new RecipeCategory('Pakistani', [
    new Recipe('Biryani', ['Rice', 'Chicken', 'Spices'], 'Cook the rice and chicken with spices.'),
    new Recipe('Karahi', ['Chicken', 'Tomatoes', 'Spices'], 'Cook chicken with tomatoes and spices.')
]);
// Chinese Recipes
const chineseRecipes = new RecipeCategory('Chinese', [
    new Recipe('Sweet and Sour Chicken', ['Chicken', 'Pineapple', 'Bell Peppers'], 'Stir fry chicken and veggies, add sauce.'),
    new Recipe('Fried Rice', ['Rice', 'Eggs', 'Vegetables'], 'Stir fry rice with eggs and vegetables.')
]);
// Indian Recipes
const indianRecipes = new RecipeCategory('Indian', [
    new Recipe('Butter Chicken', ['Chicken', 'Butter', 'Cream'], 'Cook chicken with butter and cream.'),
    new Recipe('Palak Paneer', ['Spinach', 'Paneer', 'Spices'], 'Cook paneer with spinach and spices.')
]);
// Italian Recipes
const italianRecipes = new RecipeCategory('Italian', [
    new Recipe('Pasta', ['Pasta', 'Tomato Sauce', 'Cheese'], 'Boil pasta and mix with sauce and cheese.'),
    new Recipe('Pizza', ['Dough', 'Tomato Sauce', 'Cheese'], 'Bake dough with sauce and cheese.')
]);
// Thai Recipes
const thaiRecipes = new RecipeCategory('Thai', [
    new Recipe('shrimp Pad Thai', ['Rice Noodles', 'Shrimp', 'Peanuts'], 'Stir fry noodles with shrimp and peanuts.'),
    new Recipe('Green chicken Curry', ['Coconut Milk', 'Green Curry Paste', 'Chicken'], 'Cook chicken with curry paste and coconut milk.')
]);
// Continental Recipes
const continentalRecipes = new RecipeCategory('Continental', [
    new Recipe('Steak', ['Beef', 'Salt', 'Pepper'], 'Grill beef with salt and pepper.'),
    new Recipe('Roasted Chicken', ['Chicken', 'Herbs', 'Garlic'], 'Roast chicken with herbs and garlic.')
]);
// Arabic Recipes
const arabicRecipes = new RecipeCategory('Arabic', [
    new Recipe('Shawarma', ['Chicken', 'Pita Bread', 'Garlic Sauce'], 'Wrap chicken in pita bread with garlic sauce.'),
    new Recipe('Hummus', ['Chickpeas', 'Olive Oil', 'Garlic'], 'Blend chickpeas with olive oil and garlic.')
]);
// Dessert Recipes
const dessertRecipes = new RecipeCategory('Desserts', [
    new Recipe('Chocolate Cake', ['Flour', 'Cocoa', 'Sugar'], 'Bake cake with flour, cocoa, and sugar.'),
    new Recipe('Ice Cream', ['Milk', 'Sugar', 'Cream'], 'Mix milk, sugar, and cream, then freeze.'),
    new Recipe('Mango delight', ['Mango puree', 'milk', 'whip cream', 'sugar'], 'Mix Mango puree with all things,then freeze'),
    new Recipe('Fruit cocktail', ['slice pineapple', 'cream', 'condensed milk', 'vanila custard'], 'Mix all ingredients & serve after cooled')
]);
// categories add-up,.i add only 7 countries speciality and desert commonly.......:
const recipeCatalog = new RecipeCatalog();
recipeCatalog.addCategory(pakistaniRecipes);
recipeCatalog.addCategory(chineseRecipes);
recipeCatalog.addCategory(indianRecipes);
recipeCatalog.addCategory(italianRecipes);
recipeCatalog.addCategory(thaiRecipes);
recipeCatalog.addCategory(continentalRecipes);
recipeCatalog.addCategory(arabicRecipes);
recipeCatalog.addCategory(dessertRecipes);
runRecipeCatalog(recipeCatalog);
