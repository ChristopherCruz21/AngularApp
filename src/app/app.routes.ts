import { Routes } from '@angular/router';
import { BodyComponent } from './Pages/Body/Body.component';
import { ComponentsPageComponent } from './Pages/CustomComponents/ComponentsPage.component';
import { AdminComponent } from './Pages/Admin_Pages/Admin_Body/Admin.component';

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
