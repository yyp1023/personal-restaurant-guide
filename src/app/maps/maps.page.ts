import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  lat: number;
  lng: number;
  
  map: any;

  @ViewChild("map", {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor( 
    private modalCtrl: ModalController,
    private geolocation: Geolocation
    ) {
      this.getLocation();
     }

    getLocation(){
      this.geolocation.getCurrentPosition().then((resp)=>{
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
      }).catch((error) => console.error(console.error));
    }

  ngOnInit() {
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  ionViewDidEnter(){
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(this.lat,this.lng)
    console.log(this.lat + "  "+ this.lng)
    const options = {
      center: location,
      zoom: 2
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
  }
 

}