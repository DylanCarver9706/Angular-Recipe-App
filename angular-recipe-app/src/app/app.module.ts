import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRecipeComponent,
    ViewRecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
