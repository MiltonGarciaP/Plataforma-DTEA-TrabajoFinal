import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lengua',
  templateUrl: './lengua.component.html',
  styleUrls: ['./lengua.component.css']
})
export class LenguaComponent {
  datauser: any;

  constructor(private fb: FormBuilder ,  private afAuth : AngularFireAuth , private router : Router ,private toastr: ToastrService)
  {

  }
  ngOnInit(): void {
 
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

