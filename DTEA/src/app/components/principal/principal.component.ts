import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  datauser: any;

  constructor(private fb: FormBuilder ,  private afAuth : AngularFireAuth , private router : Router ,private toastr: ToastrService)
  {

  }
  
  ngOnInit(): void {
    
   this.afAuth.currentUser.then(user=> {
    if(user && user.emailVerified )
    {
         this.datauser = user;
    }else
    {
        this.router.navigate(['login'])
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Debe iniciar sesion para ver este apartado',
          showConfirmButton: false,
          timer: 1500
      })

    }

   })
   
  }

  logout()
  {
    this.afAuth.signOut().then(()=> this.router.navigate(['login']))
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ha cerrado sesion correctamente',
      showConfirmButton: false,
      timer: 1500
  })
  }
}

