import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { RemoteEntryComponent2 } from './entry.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [RemoteEntryComponent2],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class RemoteEntryModule {
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    public resolveComponent(): ComponentFactory<RemoteEntryComponent2> {
        return this.componentFactoryResolver.resolveComponentFactory(RemoteEntryComponent2);
    }
}
