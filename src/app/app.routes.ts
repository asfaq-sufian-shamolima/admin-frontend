import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { MainComponent } from './pages/layout/main/main.component';
import { DashboardComponent } from './pages/content/dashboard/dashboard.component';
import { CustomersComponent } from './pages/content/customers/customers.component';
import { UsersComponent } from './pages/content/users/users.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'customers',
                component: CustomersComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
        ]
    },
    
];
