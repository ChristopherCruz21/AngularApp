import { Routes } from '@angular/router';
import { BodyComponent } from './Body/Body.component';
import { ComponentsPageComponent } from './CustomComponents/ComponentsPage.component';
import { AdminComponent } from './Admin/Admin.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: BodyComponent, 
    },
    {
        path: 'admin',
        title: 'Admin Home Page',
        component: AdminComponent, 
    },
    {
        path: 'custom-components-links',
        title: 'Custom Components Page',
        component: ComponentsPageComponent, 
    }
];
