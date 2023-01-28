import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { RecuperarContraComponent } from './components/recuperar-contra/recuperar-contra.component';
import { NoEncontradaComponent } from './components/no-encontrada/no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    SpinnerComponent,
    RecuperarContraComponent,
    NoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
