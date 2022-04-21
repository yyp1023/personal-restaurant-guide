import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { ModalController } from '@ionic/angular';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  @Input() restaurant: any;
  @Input() i: any;
  formData: FormGroup;

  constructor(private modalCtrl: ModalController, private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl(this.restaurant.name),
      address: new FormControl(this.restaurant.address),
      phone: new FormControl(this.restaurant.phone),
      description: new FormControl(this.restaurant.description),
      tags: new FormControl(this.restaurant.tags)
    });
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  onSubmit() {
    this.removeItem(this.i);
    this.router.navigate(['/list'])
    .then(() => {
      window.location.reload();
    });
  }

  setItem() {
    Storage.set({
      key: this.formData.value.name,
      value: JSON.stringify(this.formData.value)
    }).then(() => {
      console.log("restaurant saved...");
    });
  }

  removeItem(i) {
    Storage.remove({
      key: `${this.restaurantService.keys[i]}`
    }).then(() => {
      this.restaurantService.keys.splice(i, 1);
      this.restaurantService.restaurants.splice(i, 1);
      this.setItem();
    });
  }

}
