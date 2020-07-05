import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  redirectContact() {
    this.navController.navigateRoot('contacttow');
  }

  redirectAbout() {
    this.navController.navigateRoot('about');
  }

  redirectEstimate() {
    this.navController.navigateRoot('estimatetabs');
  }

}
