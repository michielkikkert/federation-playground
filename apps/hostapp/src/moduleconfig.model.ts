export interface ModuleConfig {
    "panels": RemoteModulePanel[];
}

export interface RemoteModulePanel {
    "path": string,
    "remoteEntry": string,
    "remoteName": string,
    "exposedModule": string,
    "exposedModuleName": string,
    "moduleImportPath": string,
    "module": any
}
