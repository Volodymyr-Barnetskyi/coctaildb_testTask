import { Component, OnInit } from '@angular/core';
import {DrinksService} from "./drinks.service";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss'],
})
export class DrinksComponent implements OnInit {
  categories: [] = [];
  alkoholic: [] = [];
  constructor(private drinksService: DrinksService) { }
  ngOnInit() {
    this.drinksService.AlcoholicApiRequest().subscribe((data)=>{
      this.alkoholic = data.drinks;
    })
    // this.drinksService.CategoryApiRequest().subscribe((data)=> {
    //   this.categories = data.drinks;
    // })
  }
  getCategories() {
    this.drinksService.CategoryApiRequest().subscribe((data) => {
      this.categories = data.drinks;
    })
  }
  getAlcoholic(){
      this.drinksService.AlcoholicApiRequest().subscribe((data)=>{
        this.alkoholic = data.drinks;
      })
    }

  }

