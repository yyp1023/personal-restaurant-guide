import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchTerm: string;
  restaurants: any = [];
  keys: any;

  constructor() {
    this.getKeys();
  }

  ngOnInit() {
  }

  getItem(i) {
    Storage.get({
      key: i
    }).then((res) => {
      this.restaurants.push(JSON.parse(res.value));
      console.log(this.restaurants);
    });
  }

  getKeys() {
    Storage.keys()
    .then((res) => {
      this.keys = res.keys;
      for (let i = 0; i < this.keys.length; i++) {
        this.getItem(this.keys[i]);
      }
    })
  }
}