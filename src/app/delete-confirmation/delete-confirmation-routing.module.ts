import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteConfirmationPage } from './delete-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteConfirmationPageRoutingModule {}
