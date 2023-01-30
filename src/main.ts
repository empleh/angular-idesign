import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './1-app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
