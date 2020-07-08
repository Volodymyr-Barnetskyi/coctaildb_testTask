import { Component, OnInit } from '@angular/core';
import {FilterService} from "./filter.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  listCoctail: [] = [];
  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.ListApiRequest().subscribe((data) =>{
      this.listCoctail = data.drinks;
    })
  }

}
