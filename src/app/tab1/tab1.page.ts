import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import {SmsManager} from "@byteowls/capacitor-sms";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  coords: any;
  address: any;
  constructor() { }
  async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.coords=coordinates.coords;
    console.log('Current position:', coordinates);
  }
  sendSms() {
    const numbers: string[] = ["+226 55531985", "+226 76501459", "+226 65 51 70 21"];
    SmsManager.send({
        numbers: numbers,
        text: "Longitude:${{this.coords.longitude}} Latitude:${{this.coords.latitude}}",
    }).then(() => {
        // success
    }).catch(error => {
        console.error(error);
    });
}
}
