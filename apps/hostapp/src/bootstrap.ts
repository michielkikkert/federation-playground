import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { MODULES_CONFIG } from './moduleinjection.token';
import { ModuleConfig, RemoteModulePanel } from './moduleconfig.model';

if (environment.production) {
    enableProdMode();
}

async function main() {
    const response = await fetch('http://127.0.0.1:8080/config.json');
    const config = (await response.json()) as ModuleConfig;

    for (let i = 0; i < config.panels.length; i++) {
        config.panels[i].module = await loadRemoteModule(config.panels[i]);
    }

    platformBrowserDynamic([
        {
            provide: MODULES_CONFIG,
            useValue: config,
        },
    ])
        .bootstrapModule(AppModule)
        .catch((err) => console.error(err));
}

main();
