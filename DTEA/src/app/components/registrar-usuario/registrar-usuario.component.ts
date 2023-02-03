import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { UrlSerializer } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
registrarUsuario : FormGroup;

constructor(private fb: FormBuilder ,  private afAuth : AngularFireAuth)
{
 
  this.registrarUsuario = this.fb.group({
    nombre: ["", Validators.required],
    apellido: ["", Validators.required],
    email: ["", Validators.required],
    contraseña: ["", Validators.required],
    repetircontraseña: ["", Validators.required]
  })
}

ngOnInit(){}

registrar()
{
  
  const email = this.registrarUsuario.value.email;
  const nombre = this.registrarUsuario.value.nombre;
  const apellido = this.registrarUsuario.value.apellido;
  const contraseña = this.registrarUsuario.value.contraseña;
  const repetircontraseña = this.registrarUsuario.value.contraseña;

  if(contraseña != repetircontraseña){
    Swal.fire({
      icon: 'error',
      title: 'Un error',
      text: "La contraseñas deben ser la mismas"
      
    })
    return;
  }
  
  this.afAuth.createUserWithEmailAndPassword(email, contraseña).then((user)=> {
   console.log(user);
  }).catch((error) =>{
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Un error',
      text: this.firebaseError(error.code)
      
    })
   
  })
  

}


firebaseError(code: string)
{

  switch(code)
  {
    case 'auth/email-already-in-use':
      return 'Ya este correo esta en uso'

    case 'auth/weak-password':

      return 'La contraseña es muy sencilla pruebe con otra'

      case 'auth/invalid-email':
      return 'No es un correo valido'

    default:
      return 'Error desconocido';
    


  }
}

}
