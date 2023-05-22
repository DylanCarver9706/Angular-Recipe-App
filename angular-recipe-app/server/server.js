const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

app.get('/api/recipes', (req, res) => {
  const recipes = JSON.parse(fs.readFileSync('./server/db.json', 'utf8'));
  res.json(recipes);
});

app.post('/api/recipes', (req, res) => {
  const recipes = JSON.parse(fs.readFileSync('./server/db.json', 'utf8'));
  const newRecipe = req.body;
  recipes.push(newRecipe);
  fs.writeFileSync('./server/db.json', JSON.stringify(recipes, null, 2), 'utf8');
  res.json(newRecipe);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
