import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { TowcompanyService } from './../../towcompany.service';
import { Observable } from 'rxjs';

export interface TowCompany {
  id: string;
  name: string;
  phone: string;
  zipcode: string;
  hookup: number;
  permile: number;
}

@Component({
  selector: 'app-contacttow',
  templateUrl: './contacttow.page.html',
  styleUrls: ['./contacttow.page.scss'],
})
export class ContacttowPage implements OnInit {

  zipcode: string = "";
  companies: TowCompany[];

 constructor(private towService : TowcompanyService, public callNumber: CallNumber) { }

  ngOnInit() {
    /* this.towService.getAll().subscribe( res => {
      this.companies = res;
    }) */
  }

  findNearestTowingCompanies() {
    var x = String(this.zipcode);
    console.log(x + "   " + x.length +" length");
    if(x.length < 5) {
      x = '0' + this.zipcode;
    }
    
    
    this.towService.getByZipcode(x).subscribe(( res : any[]) => {
      this.companies = res;
    })
    
  }

  async makeCall(company: any): Promise<any> {
    
    this.callNumber.callNumber(company.phone, true)
    .then(() => console.log('dialer launched'))
    .catch(() => console.log('Error launching dialer'));
  }

}
