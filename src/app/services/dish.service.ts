import { Injectable } from '@angular/core';
import { Dish } from "../shared/dish";
import { DISHES } from "../shared/dishesh";
@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes():Dish[]{
    return DISHES;
  }
  constructor() { }
}
