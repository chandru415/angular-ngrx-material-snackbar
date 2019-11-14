import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarDemoComponent } from './components/snackbar-demo/snackbar-demo.component';
import { SnackbarEffects } from './store/effects/snackbar.effects';
import { MatSnackBarModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SnackbarDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects]),
    EffectsModule.forFeature([SnackbarEffects]),
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
