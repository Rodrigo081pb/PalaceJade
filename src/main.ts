import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations }    from '@angular/platform-browser/animations';
import { provideRouter }        from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { appConfig }    from './app/app.config';
import { routes }       from './app/app.routes';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    ...(appConfig.providers || [])
  ],
}).catch(err => console.error(err));
