import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth'


import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
registrarUsuario : FormGroup;

constructor(private fb: FormBuilder ,  private afAuth : AngularFireAuth , private router : Router ,private toastr: ToastrService)
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
  const repetircontraseña = this.registrarUsuario.value.repetircontraseña;

 if(contraseña != repetircontraseña )
 {
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Las contraseñas deben ser iguales',
    showConfirmButton: true,
  
 })
 return;

 }

  this.afAuth
  .createUserWithEmailAndPassword(email,contraseña)
  .then((user) => {

   
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha registrado correctamente',
      showConfirmButton: false,
      timer: 1500
     })//Swal

    this.router.navigate(['/login'])
    
  }).catch((error) => {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: this.firebaseError(error.code),
      showConfirmButton: true,
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

      case 'auth/invalid-password':
        
      return'La contraseña debe de ser de mas de 6 caracteres'

    default:
      return 'Error desconocido';
    


  }
}

}
