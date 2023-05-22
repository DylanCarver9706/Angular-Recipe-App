import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';

const routes: Routes = [
  { path: 'create-recipe', component: CreateRecipeComponent },
  { path: 'view-recipes', component: ViewRecipesComponent },
  { path: '', redirectTo: '/view-recipes', pathMatch: 'full' },
  { path: '**', redirectTo: '/view-recipes' } // Add this wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
