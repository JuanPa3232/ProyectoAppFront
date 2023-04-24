import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  providers: []
})
export class RegistroPage implements OnInit {

    formularioRegistro!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService:UserService) {
    
    }
    ngOnInit(): void {

      this.formularioRegistro = this.formBuilder.group({
        'name': [null, Validators.compose([
          Validators.required
        ])],
        'lastname': [null, Validators.compose([
          Validators.required
        ])],
        'usuario': [null, Validators.compose([
          Validators.required
        ])],
        'email': [null, Validators.compose([
          Validators.required
        ])],
        'used': [null, Validators.compose([
          Validators.required
        ])]
        ,
        'age': [null, Validators.compose([
          Validators.required
        ])],
        'phone': [null, Validators.compose([
          Validators.required
        ])],
        'password': [null, Validators.compose([
          Validators.required
        ])]
      });
    }
  
    doSave(){
      console.log(this.formularioRegistro.value)
      this.userService.registerUser(this.formularioRegistro.value).subscribe((data: any)=>{
        console.log(data)
      })
    }
  
  }
  