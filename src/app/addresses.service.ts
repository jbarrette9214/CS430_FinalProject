import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  private toAddress: any;
  private fromAddress: any;
  private route: any;
  private miles: number = 0;

  constructor(private http: HttpClient) { }

  getToAddress() {
    return this.toAddress;
  }

  setToAddress(address: any) {
    this.toAddress = address;
  }

  getFromAddress() {
    return this.fromAddress;
  }

  setFromAddress(address: any) {
    this.fromAddress = address;
  }

  getMiles() {
    return this.miles;
  }


  async calculateDistance() {
    this.getRouteInfo().subscribe((data: any[]) => {
      this.route = data;
      this.miles = this.route.route.distance;
    });
    
    const result = await this.resolveAfter1Second();
    //console.log(this.miles + "     miles");
  }

  getRouteInfo() {
    return this.http.get("http://www.mapquestapi.com/directions/v2/route?key=b0JYLxFRjZ5Cy1Q02Xq3LDhFQrDelz6E&from=16" + 
      this.getFromAddress() + "&to=" + this.getToAddress());
  }

  resolveAfter1Second() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 1000);
    })
  }
}
