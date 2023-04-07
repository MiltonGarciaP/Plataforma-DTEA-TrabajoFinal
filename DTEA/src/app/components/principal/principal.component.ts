import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase/compat';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  datauser: any;

  constructor(private fb: FormBuilder ,  private auth : AngularFireAuth , private router : Router ,private toastr: ToastrService)
  {

  }
  
  ngOnInit(): void {
   
}

}



