import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapsPage } from '../maps/maps.page';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  @Input() data: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  async getDirection() {
    const modal = await this.modalCtrl.create({
      component: MapsPage
    });
    await modal.present();
 }

}
