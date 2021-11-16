import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { RouterModule } from '@angular/router';
import { AdminUsuarioComponent } from './admin-usuario/admin-usuario.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PerfilesComponent } from './perfiles/perfiles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardpageComponent,
    AdminUsuarioComponent,
    ContabilidadComponent,
    UsuariosComponent,
    PerfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: DashboardpageComponent },
      { path: 'dashboard', component: DashboardpageComponent },
      { path: 'administracionUsuarios', component: AdminUsuarioComponent },
      { path: 'contabilidad', component: ContabilidadComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'perfiles', component: PerfilesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
