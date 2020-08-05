import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { VentanaemergentPage } from '../ventanaemergent/ventanaemergent.page';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  registro = new FormGroup({
    nombres: new FormControl(
      '',
      Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(3),
        Validators.pattern('[a-z-A-Z-_ ]*'),
        Validators.required,
      ])
    ),
    telefono: new FormControl(
      '',
      Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.pattern('^[0-9-s()]*$'),
        Validators.required,
      ])
    ),
    email: new FormControl(
      '',
      Validators.compose([
        Validators.maxLength(50),
        //  Validators.minLength(3),
        Validators.pattern(
          '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
        ),
      ])
    ),
    horario: new FormControl('', Validators.required),
    checkbox: new FormControl('false', Validators.requiredTrue),
    nota: new FormControl(
      '',
      Validators.compose([
        Validators.maxLength(200),
        //   Validators.minLength(3),
        Validators.pattern('[a-z-A-Z-0-9_ .,-_]*'),
      ])
    ),
  });

  form_messages = {
    nombres: [
      { type: 'required', message: 'Nombre y apellido es requerido' },
      {
        type: 'maxlength',
        message: 'No debe tener mas de 35 caracteres',
      },
      {
        type: 'pattern',
        message: 'Solo debe contener letras',
      },
    ],
    telefono: [
      { type: 'required', message: 'Teléfono es requerido' },
      {
        type: 'maxlength',
        message: 'No debe tener mas de 25 caracteres',
      },
      {
        type: 'pattern',
        message: 'Solo debe contener números',
      },
    ],
    email: [
      {
        type: 'maxlength',
        message: 'No debe tener mas de 35 caracteres',
      },
      {
        type: 'pattern',
        message: 'Ingrese un correo electrónico valido',
      },
    ],
    horario: [{ type: 'required', message: 'Horario requerido.' }],
    nota: [
      {
        type: 'maxlength',
        message: 'No debe tener mas de 255 caracteres',
      },
      {
        type: 'pattern',
        message: 'Solo debe contener letras, numeros y signos especificos',
      },
    ],
    checkbox: [{ type: 'required', message: 'Para enviar sus datos Acepte LOPD.' }],
  };

  constructor(public regService: ApiService, private router: Router, private popover: PopoverController) { }

  ngOnInit() {
    this.registro.reset(this.registro.value);
  }

  CrearVentana() {
    this.popover.create({
      component: VentanaemergentPage,
      showBackdrop: false
    }).then((popoverElement) => {
      popoverElement.present();
    })
  }

  guardarDatos() {
    //  console.log(this.registro.value);
    this.regService.postReg(this.registro.value).subscribe(
      (dataRegistro) => {
        //    console.log(this.registro.value.nombres);
        this.router.navigate(['/inicio', this.registro.value.nombres]);
        //     resolve(JSON.parse(dataRegistro.data));
      },
      (error) => {
        //console.log('erroror' + error);
        this.router.navigate(['/error'])
      }
    );
  }
}