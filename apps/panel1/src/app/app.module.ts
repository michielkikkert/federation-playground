import { ComponentFactory, ComponentFactoryResolver, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RemoteEntryModule } from './remote-entry/entry.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
