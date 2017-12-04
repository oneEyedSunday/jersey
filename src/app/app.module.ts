import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './data.service';
import { JerseyHomeComponent } from './jersey/home/home.component';
import { CreateComponent } from './jersey/create/create.component';
import { CompleteComponent } from './jersey/complete/complete.component';

import { StoreModule } from '@ngrx/store';
// import { jerseyReducer } from './core/jersey.reducer';
// import { reducers } from './core/reducers/jersey.factory';
import { reducers, metaReducers } from './concretepage/reducers/reducers';
import { JerseyStyleComponent } from './jersey/create/jersey-style/jersey-style.component';
import { JerseyTextComponent } from './jersey/create/jersey-text/jersey-text.component';
import { JerseyExtrasComponent } from './jersey/create/jersey-extras/jersey-extras.component';
import { JerseyPreviewComponent } from './jersey-preview/jersey-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CreateComponent,
    CompleteComponent,
    JerseyHomeComponent,
    JerseyStyleComponent,
    JerseyTextComponent,
    JerseyExtrasComponent,
    JerseyPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
