import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DashboardTitleResolver {
  resolve() {
    return Promise.resolve('My dashboard');
  }
}

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Standalone App - ${title}`);
    } else {
      this.title.setTitle(`Standalone app - User Info`);
    }
  }
}

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./user/user.component').then(
        ({ UserComponent }) => UserComponent
      ),
  },
  {
    path: 'dashboard',
    title: DashboardTitleResolver,
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        ({ DashboardComponent }) => DashboardComponent
      ),
  },
];
