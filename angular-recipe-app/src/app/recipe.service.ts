import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: any[] = [
    {
      name: 'Spaghetti Bolognese',
      instructions: '1. Cook spaghetti according to package instructions. \n2. In a large pan, heat olive oil and sauté minced garlic and chopped onions. \n3. Add ground beef and cook until browned. \n4. Stir in tomato sauce, diced tomatoes, and Italian seasoning. Simmer for 15 minutes. \n5. Serve the sauce over cooked spaghetti. Enjoy!',
      comments: []
    },
    {
      name: 'Chicken Stir-Fry',
      instructions: '1. In a wok or large skillet, heat oil over medium-high heat. \n2. Add sliced chicken breast and cook until no longer pink. \n3. Add sliced bell peppers, broccoli florets, and snap peas. Stir-fry for a few minutes. \n4. In a small bowl, whisk together soy sauce, ginger, garlic, and cornstarch. \n5. Pour the sauce over the chicken and vegetables. Stir well to coat. \n6. Cook for an additional 2-3 minutes until the sauce thickens. \n7. Serve the stir-fry over steamed rice. Enjoy!',
      comments: []
    },
    {
      name: 'Caprese Salad',
      instructions: '1. Slice ripe tomatoes and fresh mozzarella cheese into ¼-inch thick slices. \n2. Arrange tomato and mozzarella slices on a plate. \n3. Top with fresh basil leaves. \n4. Drizzle with olive oil and balsamic glaze. \n5. Sprinkle with salt and pepper to taste. \n6. Serve immediately. Enjoy!',
      comments: []
    },
    {
      name: 'Chocolate Chip Cookies',
      instructions: '1. Preheat oven to 350°F (175°C). \n2. In a large bowl, cream together butter, granulated sugar, and brown sugar until light and fluffy. \n3. Beat in eggs one at a time, then stir in vanilla. \n4. In a separate bowl, whisk together flour, baking soda, and salt. \n5. Gradually add the dry ingredients to the wet ingredients and mix until just combined. \n6. Stir in chocolate chips. \n7. Drop rounded tablespoonfuls of dough onto ungreased baking sheets. \n8. Bake for 10-12 minutes or until golden brown. \n9. Allow cookies to cool on baking sheets for 5 minutes before transferring to wire racks to cool completely. Enjoy!',
      comments: []
    },
    {
      name: 'Grilled Salmon',
      instructions: '1. Preheat grill to medium heat. \n2. Season salmon fillets with salt, pepper, and your favorite herbs or spices. \n3. Place salmon skin-side down on the grill grates. \n4. Cook for 4-5 minutes per side or until the salmon is opaque and flakes easily with a fork. \n5. Remove from the grill and serve immediately. Enjoy!',
      comments: []
    }
  ];

  addRecipe(recipe: any): void {
    this.recipes.push(recipe);
  }

  getRecipes(): any[] {
    return this.recipes;
  }
}
