import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUsuario: FormGroup;
loading: boolean = false;

constructor(private fb: FormBuilder ,  private afAuth : AngularFireAuth , private router : Router ,private toastr: ToastrService)
{

  this.loginUsuario = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    contraseña: ['', [Validators.required, Validators.minLength(6)]]
  })
}


  ngOnInit(): void {
   
  }

  login()
  {
    const correo = this.loginUsuario.value.email;
    const contraseña = this.loginUsuario.value.contraseña;

  this.loading = true;
     this.afAuth.signInWithEmailAndPassword(correo,contraseña).then((user) =>{
      console.log(user);
      if (user.user?.emailVerified)
      {
         this.loading = false;
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ha iniciado sección correctamente',
        showConfirmButton: false,
        timer: 1500

          })//Swal
          this.router.navigate(['materias']) 

      }else
      {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: "Debe verificar su correo",
          showConfirmButton: false,
          timer : 2000
        })
        this.router.navigate(['correo'])
      }
      
    }).catch((error)=> {
      console.log(error);
      this.loading = false;
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
    case 'auth/wrong-password':
      return 'La contraseña es incorrecta'

    case 'auth/user-not-found':

      return 'No hay ningun usuario con este correo'

      case 'auth/invalid-email':
      return 'No es un correo valido'

      case 'auth/invalid-password':
        
      return'La contraseña debe de ser de mas de 6 caracteres'

    default:
      return 'Error desconocido';
    


  }
}

}
