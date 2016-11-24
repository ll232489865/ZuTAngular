import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './zut.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);