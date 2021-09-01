import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            [
                // {
                //     path: 'panel1',
                //     loadChildren: () =>
                //         import('panel1/Module').then((m) => m.RemoteEntryModule),
                // },
            ],
            {initialNavigation: 'enabledBlocking'}
        ),
        RouterModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
