import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ClienteHomeComponent } from './components/cliente-home/cliente-home.component';

export const routes: Routes = [
    {path: '/', component: LandingPageComponent},
    {path: '/login', component: LoginComponent},
    {path: '/cadastro', component: CadastroComponent},
    {
        path: '/cliente', 
        component: CadastroComponent,
        children:[
            { path: 'home', component: ClienteHomeComponent },
        ]
    },
    {
        path: '/admin', 
        component: CadastroComponent,
        children:[
            { path: 'home', component: AdminHomeComponent },
        ]
    }
];
