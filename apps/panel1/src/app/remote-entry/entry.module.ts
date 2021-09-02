import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RemoteEntryComponent } from './entry.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
})
export class RemoteEntryModule {
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    public resolveComponent(): ComponentFactory<RemoteEntryComponent> {
        return this.componentFactoryResolver.resolveComponentFactory(RemoteEntryComponent);
    }
}
