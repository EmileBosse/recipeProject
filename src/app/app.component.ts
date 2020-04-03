import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipe = true;
  showShoppingList = false;


  onMenuChange(item: string){
    switch(item){
      case "recipe":
        this.showRecipe = true;
        this.showShoppingList = false;
      break;
      case "shopping-list":
        this.showRecipe = false;
        this.showShoppingList = true;
      break;
    }
  }
}
