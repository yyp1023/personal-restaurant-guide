import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { ModalController } from '@ionic/angular';
import { AddPage } from '../add/add.page';
import { DeleteConfirmationPage } from '../delete-confirmation/delete-confirmation.page';
import { DetailPage } from '../detail/detail.page';
import { EditPage } from '../edit/edit.page';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  restaurants = this.restaurantService.restaurants;

  constructor(private restaurantService: RestaurantService, private modalCtrl: ModalController) {
    this.getKeys();
  }

  ngOnInit() {
  }

  getItem(i) {
    Storage.get({
      key: i
    }).then((res) => {
      this.restaurantService.restaurants.push(JSON.parse(res.value));
    });
  }

  getKeys() {
    Storage.keys()
    .then((res) => {
      this.restaurantService.keys = res.keys;
      for (let i = 0; i < this.restaurantService.keys.length; i++) {
        this.getItem(this.restaurantService.keys[i]);
      }
    });
  }

  async openAdd() {
    const modal = await this.modalCtrl.create({
      component: AddPage
    });
    await modal.present();
  }

  async openEdit(restaurant, i) {
    const modal = await this.modalCtrl.create({
      component: EditPage,
      componentProps: {
        restaurant: restaurant,
        i: i
      }
    });
    await modal.present();
  }

  async openDialog(i) {
    const modal = await this.modalCtrl.create({
      component: DeleteConfirmationPage,
      componentProps: {
        data: i
      }
    });
    await modal.present();
  }

  async openDetails(i) {
    const modal = await this.modalCtrl.create({
      component: DetailPage,
      componentProps: {
        data: i
      }
    });
    await modal.present();
  }
  
}
