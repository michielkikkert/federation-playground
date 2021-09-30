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
import { ModuleConfig, RemoteModulePanel } from '../moduleconfig.model';
import { MODULES_CONFIG } from '../moduleinjection.token';
import { TestService } from "@kict/mfe-shared";
import { Observable } from "rxjs";


@Component({
    selector: 'federation-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'hostapp';
    @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
    public data$: Observable<any> = this.shared.data$;

    constructor(
        private compiler: Compiler,
        private injector: Injector,
        @Inject(MODULES_CONFIG) private config: ModuleConfig,
        private shared: TestService
    ) {}

    async ngOnInit() {

      console.log(this.config);

        this.config.panels.forEach( panel => {
            this.loadRemotePanel(panel);
        });

        this.shared.setData('App OnInit');
    }

    setRandom() {
        const rand = Math.random();
        this.shared.setData(rand);
    }

    loadRemotePanel(panel: RemoteModulePanel) {
        const module = panel.module[panel.exposedModuleName];
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
