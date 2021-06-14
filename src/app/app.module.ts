import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {InicioComponent} from './pages/inicio.component';
import {IniciosComponent} from './auth/inicios.component';
import {SidebaradmComponent} from './shared/sidebaradm/sidebaradm.component';
import {NoticiasComponent} from './pages/administrador/noticias/noticias.component';
import {ListaempresasComponent} from './pages/administrador/listaempresas/listaempresas.component';
import {LogingraduadoComponent} from './auth/logingraduado/logingraduado.component';
import { AplicarofertaComponent } from './pages/ofertalaboral/aplicaroferta/aplicaroferta.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderlogeadoComponent} from './shared/headerlogeado/headerlogeado.component';
import {HeaderComponent} from './shared/header/header.component';
import { EditargraduadoComponent } from './pages/administrador/editargraduado/editargraduado.component';
import { PublicacionesComponent } from './pages/graduado/publicaciones/publicaciones.component';
import { RecuperarclaveComponent } from './auth/logingraduado/recuperar/recuperarclave.component';
import { SidebargraduadoComponent } from './shared/sidebargraduado/sidebargraduado.component';
import { GraduadoComponent } from './pages/graduado/graduado.component';
import { EditarperfilgradComponent } from './pages/graduado/editarperfilgrad/editarperfilgrad.component';
import { OferlaboraldirComponent } from './pages/administrador/oferlaboraldir/oferlaboraldir.component';
import { ListaofertasComponent } from './pages/ofertalaboral/listaofertas/listaofertas.component';
import { OferlabempresaComponent } from './pages/empresa/oferlabempresa/oferlabempresa.component';
import { EditarinfoadmComponent } from './pages/administrador/editarinfoadm/editarinfoadm.component';
import { EditarperfilempComponent } from './pages/empresa/editarperfilemp/editarperfilemp.component';
import { ReportesComponent } from './pages/administrador/reportes/reportes.component';
import { RecuperarusuarioComponent } from './auth/logingraduado/recuperar/recuperarusuario.component';
import { LogempresaComponent } from './auth/logempresa/logempresa.component';
import { LogadminComponent } from './auth/logadmin/logadmin.component';
import { VerestadopostComponent } from './pages/graduado/verestadopost/verestadopost.component';
import {RegistroempresaComponent} from './auth/registroempresa/registroempresa.component';
import {RegistroempresaComponent2} from './pages/ofertalaboral/registroempresa/registroempresa.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BackupsadminComponent } from './pages/administrador/backupsadmin/backups.component';
import { IniciopublicoComponent } from './pages/informacion/iniciopublico.component';
import { SidebarempComponent } from './shared/sidebaremp/sidebaremp.component';
import { ListarNoticiasComponent } from './pages/listar-noticias/listar-noticias.component';
import { ListarProxEventosComponent } from './pages/listar-prox-eventos/listar-prox-eventos.component';
import { DetalleNoticiasComponent } from './pages/detalle-noticias/detalle-noticias.component';
import { NotificacionesComponent } from './pages/graduado/notificaciones/notificaciones.component';
import {RegistrograduadoComponent} from './pages/graduado/registrograduado/registrograduado.component';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {JwtInterceptor} from "./servicios/jwt.interceptor";
import { MenuempresaComponent } from './pages/empresa/menuempresa/menuempresa.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    InicioComponent,
    IniciosComponent,
    HeaderComponent,
    HeaderlogeadoComponent,
    SidebaradmComponent,
    FooterComponent,
    LogingraduadoComponent,
    ListaempresasComponent,
    AplicarofertaComponent,
    DashboardComponent,
    PublicacionesComponent,
    EditargraduadoComponent,
    RecuperarclaveComponent,
    SidebargraduadoComponent,
    GraduadoComponent,
    EditarperfilgradComponent,
    OferlaboraldirComponent,
    ListaofertasComponent,
    OferlabempresaComponent,
    EditarinfoadmComponent,
    EditarperfilempComponent,
    ReportesComponent,
    RecuperarusuarioComponent,
    LogempresaComponent,
    LogadminComponent,
    VerestadopostComponent,
    RegistroempresaComponent,
    RegistroempresaComponent2,
    BackupsadminComponent,
    IniciopublicoComponent,
    SidebarempComponent,
    ListarNoticiasComponent,
    ListarProxEventosComponent,
    DetalleNoticiasComponent,
    NotificacionesComponent,
    RegistrograduadoComponent,
    MenuempresaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
