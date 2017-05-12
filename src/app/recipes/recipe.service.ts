import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Super Dank', 'Also super good', 'https://i1.wp.com/myginosdeli.com/wp-content/uploads/2017/01/15894345_1576825068999457_4185430330757427995_n.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}