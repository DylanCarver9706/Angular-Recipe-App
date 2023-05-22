import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.css']
})
export class ViewRecipesComponent implements OnInit {
  recipes: any[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  addComment(recipe: any, comment: string): void {
    recipe.comments.push(comment);
  }
}
