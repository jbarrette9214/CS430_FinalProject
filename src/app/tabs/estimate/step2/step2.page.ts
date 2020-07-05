import { TabsServiceService } from './../../../tabs-service.service';
import { AddressesService } from './../../../addresses.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
})
export class Step2Page implements OnInit {

  address: string = " ";
  lat: number = 0;
  long: number = 0;
  toAddress: string = "";
  fromAddress: string = "";
  
  constructor(private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder,
    private navController: NavController, private addressesService: AddressesService,
    private tabService : TabsServiceService) { 
  }

  ngOnInit() {
 
  }

  ionViewDidEnter(){
   this.tabService.tab3Disabled = true; 
  }

  async addLocation() {

    //this.geolocation.getCurrentPosition(this.onSuccess, this.onError);
    await this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
    }).catch((error) => {
      console.log('error getting location up top');
    })

    console.log("lat " + this.lat);
    console.log("long " + this.long);

    //Geocoder configuration
    let geoencoderOptions: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    if(this.lat != 0) {
      await this.nativeGeocoder.reverseGeocode(this.lat, this.long, geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.address = this.generateAddress(result[0]);
        var element = document.getElementById('fromLocation');
        element.innerHTML  = this.address;
      
      })
      .catch((error: any) => {
        alert('Error getting location');
        console.log(error);
      });
    }
    
     
  }

  
  //Return formatted address
  generateAddress(addressObj) {
  
    let completeAddress = "";

    completeAddress = addressObj['areasOfInterest'] + " " + addressObj['thoroughfare'] + "," + addressObj['locality'] +
      "," + addressObj['administrativeArea']; //+ " " + addressObj['postalCode'];

    console.log("Complete Address");
    console.log(completeAddress + " complete address");

    return completeAddress;
  } 

  async nextTab() {

    if(this.toAddress.length != 0 && this.fromAddress.length != 0) {
      this.addressesService.setToAddress(this.toAddress);
      this.addressesService.setFromAddress(this.fromAddress);
      await this.addressesService.calculateDistance();

      this.tabService.tab3Disabled = false;

      this.navController.navigateRoot('/estimatetabs/tab3');
    } 
  }


}
