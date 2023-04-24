import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  name!: string;
  constructor(
     public fb: FormBuilder,
     public alertController: AlertController,
     private http: HttpClient) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)

    })
  }

  ngOnInit() {
    this.http.get<{name: string}>('/users').subscribe(data => { this.name = data.name;
    });
  }

  
    


  }

