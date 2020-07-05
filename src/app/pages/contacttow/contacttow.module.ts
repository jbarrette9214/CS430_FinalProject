import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContacttowPageRoutingModule } from './contacttow-routing.module';

import { ContacttowPage } from './contacttow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContacttowPageRoutingModule
  ],
  declarations: [ContacttowPage]
})
export class ContacttowPageModule {}
