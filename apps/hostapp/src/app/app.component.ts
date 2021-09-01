import {
    Compiler,
    Component,
    ComponentFactory, ComponentRef, Inject,
    Injector,
    NgModuleFactory,
    NgModuleRef,
    OnInit,
    ViewChild, ViewContainerRef
} from '@angular/core';
import { ModuleConfig } from '../moduleconfig.model';
import { MODULES_CONFIG } from '../moduleinjection.token';


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
        private injector: Injector,
        @Inject(MODULES_CONFIG) private config: ModuleConfig
    ) {}

    ngOnInit() {
        this.loadRemote();
    }

    loadRemote() {
        const module = this.config.panel.module[this.config.panel.exposedModuleName];
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
