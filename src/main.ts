import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom, enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, TitleStrategy } from '@angular/router';
import { routes, CustomTitleStrategy } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes), BrowserAnimationsModule),
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
  ],
}).catch((err) => console.error(err));
