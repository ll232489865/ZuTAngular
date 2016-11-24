import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ZutModule } from './zut.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ZutModule);