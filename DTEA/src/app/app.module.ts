import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos de desarrollo
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { RecuperarContraComponent } from './components/recuperar-contra/recuperar-contra.component';
import { NoEncontradaComponent } from './components/no-encontrada/no-encontrada.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MateriasComponent } from './components/materias/materias.component';
import { environment } from 'src/environments/environment';
import { CorreoComponent } from './components/correo/correo.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NaturalesComponent } from './naturales/naturales.component';
import { SocialesComponent } from './sociales/sociales.component';
import { LenguaComponent } from './lengua/lengua.component';
import { MatematicasComponent } from './matematicas/matematicas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    SpinnerComponent,
    RecuperarContraComponent,
    NoEncontradaComponent,
    NosotrosComponent,
    MateriasComponent,
    CorreoComponent,
    PerfilComponent,
    NaturalesComponent,
    SocialesComponent,
    LenguaComponent,
    MatematicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
