import { TowcompanyService } from './../../../towcompany.service';
import { AddressesService } from './../../../addresses.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { NavController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
})
export class Step3Page implements OnInit {

  route: any;
  miles: string;
  cost: number = 0;

  constructor(private addressesService: AddressesService, private http: HttpClient, private towService: TowcompanyService,
    private navController: NavController, private callNumber: CallNumber) { 
  }

  ngOnInit() {
    this.miles = this.addressesService.getMiles().toString();
    this.generateEstimate();
  }

  ionViewDidEnter(){
    
  }

  generateEstimate() {
    var distance = parseInt(this.miles);
    distance = Math.ceil(distance);
    
    //first 2 miles are free
    if(distance > 2) {
      distance = distance - 2;
    } else {
      distance = 0;
    }

    //calculate cost
    this.cost = this.towService.currentCompany.hookup + (this.towService.currentCompany.permile * distance);
     
  }

  goHome() {
    this.navController.navigateRoot('home');
  }

  callTowingCompany() {
    this.callNumber.callNumber(this.towService.currentCompany.phone, true)
    .then(() => console.log('dialer launched'))
    .catch(() => console.log('Error launching dialer'));
  }
}
