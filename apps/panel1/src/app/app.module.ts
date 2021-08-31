import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './remote-entry/entry.component';
import { RemoteEntryModule } from './remote-entry/entry.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RemoteEntryModule,
    RouterModule.forRoot([{
        path: '',
        component: RemoteEntryComponent
    }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
