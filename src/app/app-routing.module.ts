import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationRoutes } from 'src/app/app-navigation-constants';

const routes: Routes = [
    {
        path: NavigationRoutes.LOGIN,
        loadChildren: () =>
            import('./pages/login-container/login-container.module').then(
                m => m.LoginContainerModule
            ),
    },
    {
        path: NavigationRoutes.DASHBOARD,
        loadChildren: () =>
            import('./pages/dashboard-container/dashboard-container.module').then(
                m => m.DashboardContainerModule
            ),
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabled',
            scrollPositionRestoration: 'disabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
