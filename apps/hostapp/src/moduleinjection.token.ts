import { InjectionToken } from '@angular/core';
import { ModuleConfig } from './moduleconfig.model';

export const MODULES_CONFIG = new InjectionToken<ModuleConfig>('Module config token');
