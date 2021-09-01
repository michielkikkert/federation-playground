import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { loadRemoteModule } from '@angular-architects/module-federation'
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

fetch('http://127.0.0.1:8080/config.json').then(
    response => response.json()
    ).then (
        data => {
            const namespace = 'moduleConfig';
            (window as any)[namespace] = data;
            loadRemoteModule(data.panel).then( module => {
                data.panel.module = module;
                platformBrowserDynamic()
                    .bootstrapModule(AppModule)
                    .catch((err) => console.error(err));

            });
        }
);
