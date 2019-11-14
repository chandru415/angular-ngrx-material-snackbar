import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnackbarDemoComponent } from './components/snackbar-demo/snackbar-demo.component';

const routes: Routes = [{ path: '', component: SnackbarDemoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
