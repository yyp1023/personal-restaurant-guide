import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteConfirmationPageRoutingModule } from './delete-confirmation-routing.module';

import { DeleteConfirmationPage } from './delete-confirmation.page';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteConfirmationPageRoutingModule,
    MaterialModule
  ],
  declarations: [DeleteConfirmationPage]
})
export class DeleteConfirmationPageModule {}
