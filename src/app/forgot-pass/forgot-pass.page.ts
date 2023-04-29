import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {
  formularioForgPass!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService:UserService){
    }
  

  ngOnInit() {
    this.formularioForgPass = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])]
      });


  }
  doSend(){
    this.userService.recoverPass(this.formularioForgPass.value).subscribe((data: any)=>{
      if (Object.is(data,null)) {
        window.alert("El correo no esta registrado en esta pagina")
      } else {
        window.alert("Contraseñana enviada por email")
      }
    })
  }

}
