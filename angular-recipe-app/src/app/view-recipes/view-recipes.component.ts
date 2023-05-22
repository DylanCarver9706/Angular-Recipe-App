import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.css']
})
export class ViewRecipesComponent implements OnInit {
  recipes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes(): void {
    this.http.get<any[]>('/api/recipes').subscribe(
      (recipes) => {
        this.recipes = recipes;
      },
      (error) => {
        console.log('Error fetching recipes:', error);
      }
    );
  }

  addComment(recipe: any, comment: string): void {
    recipe.comments.push(comment);
  }
}
