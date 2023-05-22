import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent {
  recipeName: string = '';
  recipeInstructions: string = '';

  constructor(private recipeService: RecipeService) {}

  createRecipe(): void {
    const recipe = {
      name: this.recipeName,
      instructions: this.recipeInstructions,
      comments: []
    };

    this.recipeService.addRecipe(recipe);

    this.recipeName = '';
    this.recipeInstructions = '';
  }
}
