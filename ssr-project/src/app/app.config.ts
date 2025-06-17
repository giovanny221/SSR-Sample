import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {TranslocoMultiLoader} from './core/TranslocoMultiLoader';
import {provideAppTransloco} from './core/utils/provideAppTransloco';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideAppTransloco(TranslocoMultiLoader),
  ],
};
