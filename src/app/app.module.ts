import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { BreadcrumpComponent } from './components/breadcrump/breadcrump.component';
import { SearchitemComponent } from './components/searchitem/searchitem.component';
import { RelatedComponent } from './components/related/related.component';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { GridFilterComponent } from './grid-filter/grid-filter.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeadbarComponent,
    BreadcrumpComponent,
    SearchitemComponent,
    RelatedComponent,
    CarouselComponent,
    CardComponent,
    GridFilterComponent,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
