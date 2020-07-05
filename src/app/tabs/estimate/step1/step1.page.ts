import { TabsServiceService } from './../../../tabs-service.service';
import { NavController } from '@ionic/angular';
import { ZipcodesService } from './../../../zipcodes.service';
import { TowcompanyService } from './../../../towcompany.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';


export interface TowCompany {
  id: string;
  name: string;
  phone: string;
  zipcode: string;
  hookup: number;
  permile: number;
}

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})
export class Step1Page implements OnInit {

  zipcode: string = "";
  companies: TowCompany[];
  private nearestZips: string[];
  private tempArray: TowCompany[];
  private returnString: string;

  constructor(private towService : TowcompanyService, private zipService: ZipcodesService, 
    private tabService: TabsServiceService, private NavController: NavController) {
  }

  ngOnInit() {
  }

  async findNearestTowingCompanies() {
    
    //this.zipService.getClosestZipCodes(this.zipcode);

    //need to find zipcodes within 10 miles and then create an array and iterate over it calling getByZipCode()
    this.nearestZips = [];      //clear the array

    //incase the leading number is a 0, it will remove it
    var x = String(this.zipcode);
    if(x.length < 5) {
      x = '0' + this.zipcode;
    }
    
    
    //start with the zipcode that was entered so it appears at the top
    this.towService.getByZipcode(x).subscribe(( res : any[]) => {
      this.companies = res;
    })
    
    //add in the rest
    this.nearestZips.forEach((item) => {
      if(item != this.zipcode) {
        this.towService.getByZipcode(item).subscribe(res => {
            this.tempArray = res;
            this.companies = this.companies.concat(this.tempArray);
        })
      }
    });

  }

  nextPage(company: TowCompany) {
    this.towService.setCurrent(company);
    this.tabService.tab2Disabled = false;
    this.NavController.navigateRoot('/estimatetabs/tab2');
  }





}
