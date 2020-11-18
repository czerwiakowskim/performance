import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageComponent } from './examples/basic-change-detection/components/image/image.component';
import { AngularComponent } from './examples/basic-change-detection/components/angular/angular.component';
import { GalleryComponent } from './examples/basic-change-detection/components/gallery/gallery.component';
import {MatButtonModule} from "@angular/material/button";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SimpleClockComponent } from './examples/advanced-change-detection/simple-clock/simple-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    AngularComponent,
    GalleryComponent,
    SimpleClockComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
