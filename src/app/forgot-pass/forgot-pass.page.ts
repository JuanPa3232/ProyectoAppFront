import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {

  formularioForgPass: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.formularioForgPass = this.fb.group({
      'confirmaremail': new FormControl("",Validators.required),
      'passwordnueva': new FormControl("",Validators.required),
      'confirmarpasswordnueva': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

}
