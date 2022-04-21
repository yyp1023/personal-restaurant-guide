import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  formData: FormGroup;

  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      phone: new FormControl(),
      description: new FormControl(),
      tags: new FormControl()
    });
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  onSubmit() {
    console.log(this.formData.value);
    this.setItem();
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

}
