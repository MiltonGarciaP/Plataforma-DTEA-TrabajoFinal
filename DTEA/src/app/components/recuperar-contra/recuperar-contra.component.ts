import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.component.html',
  styleUrls: ['./recuperar-contra.component.css']
})
export class RecuperarContraComponent implements OnInit {
  recuperarU: FormGroup;
  loading: boolean = false;
  
  constructor (private fb: FormBuilder ,  private afAuth : AngularFireAuth , private router : Router ,private toastr: ToastrService)
  {
    this.recuperarU = this.fb.group({

      correo:['',[Validators.required, Validators.email]]
    })

  }
  
  ngOnInit(): void {
    
  }

recuperar()
{
  const email = this.recuperarU.value.correo;

  this.loading = true;
  this.afAuth.sendPasswordResetEmail(email).then(() =>{

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha envido el correo correctamente a ' + email,
      showConfirmButton: false,
      timer: 1500

     })//Swal
    this.router.navigate(['login'])

  }).catch((error)=>{
   this.loading = false;
   console.log(this.firebaseError(error))
   
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
    

    case 'auth/user-not-found':

      return 'No hay ningun usuario con este correo'

      case 'auth/invalid-email':
      return 'No es un correo valido'

    default:
      return 'Error desconocido';
    

  
  }

}
}
