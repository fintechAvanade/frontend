import { Router, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ClienteHomeComponent } from './components/cliente-home/cliente-home.component';
import { EsquecisenhaComponent } from './pages/esquecisenha/esquecisenha.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminCriarContaComponent } from './components/admin-criar-conta/admin-criar-conta.component';
import { AdminEditarContaComponent } from './components/admin-editar-conta/admin-editar-conta.component';
import { AdminGestaoContasComponent } from './components/admin-gestao-contas/admin-gestao-contas.component';
import { ChavesPixComponent } from './components/chaves-pix/chaves-pix.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { PagamentoBoletoComponent } from './components/pagamento-boletos/pagamento-boletos.component';
import { PixComponent } from './components/pix/pix.component';
import { SaqueComponent } from './components/saque/saque.component';
import { TransferenciaPadraoComponent } from './components/transferencia-padrao/transferencia-padrao.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { InvestimentosComponent } from './components/investimentos/investimentos.component';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './services/authGuard.service';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'loginAdmin', component: LoginAdminComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'esqueciSenha', component: EsquecisenhaComponent},
    {
        path: 'cliente', 
        component: ClienteComponent,
        canActivate: [AuthGuardService],
        children:[
            { path: '', component: ClienteHomeComponent},
            { path: 'chavesPix', component: ChavesPixComponent },
            { path: 'deposito', component: DepositoComponent },
            { path: 'editarUsuario', component: EditarUsuarioComponent },
            { path: 'extrato', component: ExtratoComponent },
            { path: 'investimentos', component: InvestimentosComponent },
            { path: 'boleto', component: PagamentoBoletoComponent },
            { path: 'pix', component: PixComponent },
            { path: 'saque', component: SaqueComponent },
            { path: 'transferencia', component: TransferenciaPadraoComponent },
        ]
    },
    {
        path: 'admin', 
        component: AdminComponent,
        children:[
            { path: '', component: AdminHomeComponent },
            { path: 'criarConta', component: AdminCriarContaComponent },
            { path: 'editarConta/:id', component: AdminEditarContaComponent },
            { path: 'gestaoContas', component: AdminGestaoContasComponent },

        ]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}