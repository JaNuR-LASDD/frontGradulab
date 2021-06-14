import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistroempresaComponent} from './auth/registroempresa/registroempresa.component';
import {IniciopublicoComponent} from './pages/informacion/iniciopublico.component';
import {PagnotfoundComponent} from './pages/pagnotfound/pagnotfound.component';
import {InicioComponent} from './pages/inicio.component';
import {IniciosComponent} from './auth/inicios.component';
import {RegistrograduadoComponent} from './pages/graduado/registrograduado/registrograduado.component';
import {ListagraduadosComponent} from './pages/administrador/listagraduados/listagraduados.component';
import {NoticiasComponent} from './pages/administrador/noticias/noticias.component';
import {ListaempresasComponent} from './pages/administrador/listaempresas/listaempresas.component';
import {LogingraduadoComponent} from './auth/logingraduado/logingraduado.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {EditargraduadoComponent} from './pages/administrador/editargraduado/editargraduado.component';
import {PublicacionesComponent} from './pages/graduado/publicaciones/publicaciones.component';
import {GraduadoComponent} from './pages/graduado/graduado.component';
import {EditarperfilgradComponent} from './pages/graduado/editarperfilgrad/editarperfilgrad.component';
import {OferlaboraldirComponent} from './pages/administrador/oferlaboraldir/oferlaboraldir.component';
import {AplicarofertaComponent} from './pages/ofertalaboral/aplicaroferta/aplicaroferta.component';
import {ListaofertasComponent} from './pages/ofertalaboral/listaofertas/listaofertas.component';
import {OferlabempresaComponent} from './pages/empresa/oferlabempresa/oferlabempresa.component';
import {EditarinfoadmComponent} from './pages/administrador/editarinfoadm/editarinfoadm.component';
import {EditarperfilempComponent} from './pages/empresa/editarperfilemp/editarperfilemp.component';
import {ReportesComponent} from './pages/administrador/reportes/reportes.component';
import {LogempresaComponent} from './auth/logempresa/logempresa.component';
import {LogadminComponent} from './auth/logadmin/logadmin.component';
import { BackupsadminComponent } from './pages/administrador/backupsadmin/backups.component';
import {RecuperarclaveComponent} from './auth/logingraduado/recuperar/recuperarclave.component';
import {RecuperarusuarioComponent} from './auth/logingraduado/recuperar/recuperarusuario.component';
import {SidebargraduadoComponent} from './shared/sidebargraduado/sidebargraduado.component';
import {SidebarempComponent} from './shared/sidebaremp/sidebaremp.component';
import {ListarNoticiasComponent} from './pages/listar-noticias/listar-noticias.component';
import {ListarProxEventosComponent} from './pages/listar-prox-eventos/listar-prox-eventos.component';
import {DetalleNoticiasComponent} from './pages/detalle-noticias/detalle-noticias.component';
import {VerestadopostComponent} from './pages/graduado/verestadopost/verestadopost.component';
import {NotificacionesComponent} from './pages/empresa/notificaciones/notificaciones.component';
import {MenuadministradorComponent} from './pages/administrador/menuadministrador/menuadministrador.component';
import {MenuempresaComponent} from './pages/empresa/menuempresa/menuempresa.component';




const routes: Routes = [
  {
    path: 'administrador', component: InicioComponent,
    children: [
      {path: 'editarperfil', component: EditarinfoadmComponent},
      {path: 'noticias', component: NoticiasComponent},
      {path: 'editargraduados', component: EditargraduadoComponent},
      {path: 'graduados', component: ListagraduadosComponent},
      {path: 'empresas', component: ListaempresasComponent},
      {path: 'ofertalaboral', component: OferlaboraldirComponent },
      {path: 'reportes', component: ReportesComponent },
      {path: 'backupsadmin', component: BackupsadminComponent},
      {path: '', redirectTo: '/graduados', pathMatch: 'full'}
    ]
  },
  {
    path: 'empresa', component: MenuempresaComponent,
    children: [
      {path: 'ofertalabempr', component: OferlabempresaComponent}, /*Pertenece a la empresa*/
      {path: '' ,  redirectTo: '/ofertalabempr', pathMatch: 'full'}
    ]
  },
  {
    path: 'graduado', component: GraduadoComponent,
    children: [
      {path:  'publicaciones', component: PublicacionesComponent}, /*pertenece al graduado*/
      {path: 'editarperfilgra', component: EditarperfilgradComponent}, /*Pertenece a las vistas de graduado*/
      {path: 'aplicaroferta', component: AplicarofertaComponent}, /*Pertenece a las vistas de graduado*/
      {path: 'listaoferta', component: ListaofertasComponent}, /*Pertenece a las vistas de graduado*/
    ]
  },
  { path: '', component:  IniciosComponent,
  children: [
      {path: 'registrograduado', component: RegistrograduadoComponent},
      {path: 'registroempresa', component: RegistroempresaComponent},
      {path: 'informacion', component: IniciopublicoComponent },
      {path: 'login', component: LogingraduadoComponent},
      { path: 'recuperarclave', component: RecuperarclaveComponent },
      { path: 'recuperarusuario', component: RecuperarusuarioComponent },
    {path: '', redirectTo: '/informacion', pathMatch: 'full'}
  ]},
  { path: 'listnoticias', component: DetalleNoticiasComponent },
  { path: '**', component: PagnotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
