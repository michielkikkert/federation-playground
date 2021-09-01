import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RemoteEntryComponent } from './entry.component';

@NgModule({
    declarations: [RemoteEntryComponent],
    imports: [BrowserModule],
    providers: [],
    exports: [RemoteEntryComponent],
})
export class RemoteEntryModule {constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    public resolveComponent(): ComponentFactory<RemoteEntryComponent> {
        return this.componentFactoryResolver.resolveComponentFactory(RemoteEntryComponent);
    }}
