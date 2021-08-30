import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GallaryComponent } from './gallary/gallary.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MentionsModule } from '@flxng/mentions';


@NgModule({
  declarations: [
    HomeComponent,
    GallaryComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MentionsModule ,

    MaterialModule,
    FlexLayoutModule
  ],
  exports:[
    HomeComponent,
    GallaryComponent
  ]
})
export class HomeModule { }
