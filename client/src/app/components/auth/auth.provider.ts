import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import { AuthService } from './auth.service';
import { authInterceptor } from './auth.interceptor';

export const provideAuth = (): EnvironmentProviders => {
  return makeEnvironmentProviders([
    provideHttpClient(withInterceptors([authInterceptor])),
    AuthService,
  ]);
};
