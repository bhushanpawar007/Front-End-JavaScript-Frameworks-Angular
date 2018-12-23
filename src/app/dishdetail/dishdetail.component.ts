import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/Dish';
import {  Input } from '@angular/core';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  @Input()
  dish: Dish;
  constructor() { }

  ngOnInit() {
  }

}
