import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants: any = [];
  keys: any = [];

  constructor() { }
}
