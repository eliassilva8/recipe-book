import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe("Francesinha", "Best portuguese dish", "https://www.google.pt/imgres?imgurl=https%3A%2F%2Fladobcafe.files.wordpress.com%2F2015%2F01%2Fveggie-01.jpg&imgrefurl=https%3A%2F%2Fladobcafe.pt%2F2015%2F01%2F05%2Ffrancesinha-vegetariana%2F&docid=AIHerRHVVaebXM&tbnid=K1A4rQhnl2iN8M%3A&vet=1&w=1200&h=800&bih=638&biw=1366&q=francesinha&ved=0ahUKEwiB2erIp7XSAhWGyRQKHUOVBhsQMwg-KA4wDg&iact=mrc&uact=8")

  constructor() { }

  ngOnInit() {
  }

}
