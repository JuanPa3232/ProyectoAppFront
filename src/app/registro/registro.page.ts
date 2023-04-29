import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  providers: []
})
export class RegistroPage implements OnInit {

  showPassword = false;
  
  formularioRegistro!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private alertController: AlertController) {

  }
  ngOnInit(): void {

    this.formularioRegistro = this.formBuilder.group({
      'name': [null, Validators.compose([
        Validators.required
      ])],
      'lastname': [null, Validators.compose([
        Validators.required
      ])],
      'username': [null, Validators.compose([
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

  doSave() {
    
    console.log(this.formularioRegistro.value)

    if (!this.isValidEmail(this.formularioRegistro.value.email)) {
      this.presentAlert();
      this.formularioRegistro.reset();
      return;
    }

    this.showLoading();
    this.userService.registerUser(this.formularioRegistro.value).subscribe((data: any) => {
      console.log(data)
      this.loadingCtrl.dismiss();

      setTimeout(() => {
        this.router.navigate(['/login']);// Redirige a la página /home
      }, 2000); // Espera 2 segundos (2000 milisegundos) antes de redirigir
      this.formularioRegistro.reset();
    })
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailPattern.test(email);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando informacion, espere...',
      //duration: 2000,

    });

    return await loading.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Correo denegado',
      message: 'Ingrese un correo valido',
      buttons: ['OK'],
    });

    await alert.present();
  }


}
