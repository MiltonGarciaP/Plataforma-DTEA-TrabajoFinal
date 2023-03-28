import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorreoComponent } from './components/correo/correo.component';
import { LoginComponent } from './components/login/login.component';
import { MateriasComponent } from './components/materias/materias.component';
import { NoEncontradaComponent } from './components/no-encontrada/no-encontrada.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RecuperarContraComponent } from './components/recuperar-contra/recuperar-contra.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { LenguaComponent } from './lengua/lengua.component';
import { MatematicasComponent } from './matematicas/matematicas.component';
import { NaturalesComponent } from './naturales/naturales.component';
import { SocialesComponent } from './sociales/sociales.component';

const routes: Routes = [
 {path:'', redirectTo:'login',pathMatch:'full'},
 {path:'login', component: LoginComponent},
 {path:'registrar', component: RegistrarUsuarioComponent},
 {path:'verificar-correo', component: VerificarCorreoComponent},
 {path:'recuperar', component: RecuperarContraComponent},
 {path:'principal', component: PrincipalComponent},
 {path:'404', component: NoEncontradaComponent},
 {path:'nosotros', component: NosotrosComponent},
 {path:'materias', component: MateriasComponent},
 {path:'correo', component: CorreoComponent},
 {path:'sociales', component: SocialesComponent},
 {path:'naturales', component: NaturalesComponent},
 {path:'lengua', component: LenguaComponent},
 {path:'mate', component: MatematicasComponent},
 {path:'**', redirectTo:'404',pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
