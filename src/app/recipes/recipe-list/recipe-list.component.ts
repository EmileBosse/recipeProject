import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Premiere recipe','this is simply a test','https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png'),
    new Recipe('Deuxieme recipe','this is simply a test','https://p0.pikrepo.com/preview/123/805/chocolate-cake-chocolate-cake-recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
