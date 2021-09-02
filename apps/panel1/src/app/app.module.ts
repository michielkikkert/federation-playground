import { ComponentFactory, ComponentFactoryResolver, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './remote-entry/entry.component';
import { RemoteEntryModule } from './remote-entry/entry.module';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RemoteEntryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<AppComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AppComponent);
  }
}
