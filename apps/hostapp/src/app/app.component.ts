import {
    Compiler,
    Component,
    ComponentFactory, ComponentRef,
    Injector,
    NgModuleFactory,
    NgModuleRef,
    OnInit,
    ViewChild, ViewContainerRef
} from '@angular/core';



interface ModuleConfig {
    "panel": {
        "path": string,
        "remoteEntry": string,
        "remoteName": string,
        "exposedModule": string,
        "exposedModuleName": string,
        "moduleImportPath": string,
        "module": any
    }
}

@Component({
    selector: 'federation-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'hostapp';
    @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
    constructor(
        private compiler: Compiler,
        private injector: Injector
    ) {}

    ngOnInit() {
        this.loadRemote();
    }

    loadRemote() {
        const config = (window as any)['moduleConfig'] as ModuleConfig; // Investigate if we can use a Platform Provider to pass this in correctly.
        const module = config.panel.module[config.panel.exposedModuleName];
        this.compiler
            .compileModuleAsync(module)
            .then((moduleFactory: NgModuleFactory<typeof module>) => {
                // Create a moduleRef, resolve an entry component, create the component
                const moduleRef = moduleFactory.create(
                    this.injector
                ) as NgModuleRef<typeof module>;
                const panelInstance = moduleRef.instance;
                const componentFactory =
                    panelInstance.resolveComponent() as ComponentFactory<any>;
                const {instance} = this.container.createComponent(
                    componentFactory,
                    undefined,
                    moduleRef.injector
                ) as ComponentRef<any>;
            });


    }
}
