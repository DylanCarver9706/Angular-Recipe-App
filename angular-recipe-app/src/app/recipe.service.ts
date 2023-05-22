import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: any[] = [];

  addRecipe(recipe: any): void {
    this.recipes.push(recipe);
  }

  getRecipes(): any[] {
    return this.recipes;
  }
}
