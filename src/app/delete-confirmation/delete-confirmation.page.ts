import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.page.html',
  styleUrls: ['./delete-confirmation.page.scss'],
})
export class DeleteConfirmationPage implements OnInit {

  @Input() data: any;

  constructor(private restaurantService: RestaurantService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  removeItem(i) {
    Storage.remove({
      key: `${this.restaurantService.keys[i]}`
    }).then(() => {
      this.restaurantService.keys.splice(i, 1);
      this.restaurantService.restaurants.splice(i, 1);
      this.close();
    });
  }

}
