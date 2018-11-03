import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MouseScrollPaginationDirective } from './mouse-scroll-pagination.directive';
import { ScrollPaginationDirective } from './scroll-pagination.directive';

@NgModule({
  declarations: [
    AppComponent,
    MouseScrollPaginationDirective,
    ScrollPaginationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
