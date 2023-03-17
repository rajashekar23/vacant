import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Props } from './app/constants/props';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();

}
Props.API_END_POINT = environment.API_END_POINT;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
