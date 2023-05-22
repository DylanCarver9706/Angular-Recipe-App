import { Component } from '@angular/core';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent {
  recipeName: string = '';
  recipeInstructions: string = '';
  recipes: any[] = [];

  createRecipe(): void {
    const recipe = {
      name: this.recipeName,
      instructions: this.recipeInstructions,
      comments: []
    };

    this.recipes.push(recipe);
    this.recipeName = '';
    this.recipeInstructions = '';
  }
}
