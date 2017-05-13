import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Super Dank', 'Also super good', 'https://i1.wp.com/myginosdeli.com/wp-content/uploads/2017/01/15894345_1576825068999457_4185430330757427995_n.jpg',[
      new Ingredient('Meat', 1),
      new Ingredient('Bread', 2),
      new Ingredient('Cheese', 1),
      new Ingredient('Potato', 20)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}