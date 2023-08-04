import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECEComponent } from './ece/ece.component';
import { CSEComponent } from './cse/cse.component';
import { EEEComponent } from './eee/eee.component';
const routes: Routes = [{ path: 'eee', component: EEEComponent },
{ path: 'ece', component: ECEComponent },
{ path: 'cse', component: CSEComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
