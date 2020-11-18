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
import { ManualClockComponent } from './examples/advanced-change-detection/manual-clock/manual-clock.component';
import { ZoneClockComponent } from './examples/advanced-change-detection/zone-clock/zone-clock.component';
import { LoopAsyncComponent } from './examples/trackby/loop-async/loop-async.component';
import { TrackbyDemoComponent } from "./examples/trackby/trackby-demo/trackby-demo.component";
import { LoopStandardComponent } from "./examples/trackby/loop-standard/loop-standard.component";
import { LoopAsyncTrackbyComponent } from "./examples/trackby/loop-async-trackby/loop-async-trackby.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    AngularComponent,
    GalleryComponent,
    SimpleClockComponent,
    ManualClockComponent,
    ZoneClockComponent,
    LoopAsyncComponent,
    LoopStandardComponent,
    LoopAsyncTrackbyComponent,
    TrackbyDemoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        FormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
