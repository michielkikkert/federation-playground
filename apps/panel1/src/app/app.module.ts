import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RemoteEntryModule } from './remote-entry/entry.module';
import { RemoteEntryModule as module2} from './remote-entry-2/entry.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
