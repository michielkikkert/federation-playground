import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
