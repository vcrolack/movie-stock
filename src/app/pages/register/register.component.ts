import { Component, OnInit,} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  mensajesErrores = {
    nombre: [
      {type: "required", message: "El nombre es obligatorio"},
      {type: "maxlength", message: "El nombre debe de tener 25 caracteres máximo."},
      {type: "minlength", message: "El nombre debe de tener 2 caracter mínimo."},
    ],
    apellido: [
      {type: "required", message: "El apellido es obligatorio"},
      {type: "maxlength", message: "El apellido debe tener 25 caracter máximo."},
      {type: "minlength", message: "El apellido debe tener 2 caracter mínimo."}
    ],
    email: [
      {type: "required", message: "El email es obligatorio."},
      {type: "pattern", message: "El email ingresado no es válido."}
    ],
    contrasena: [
      {type: "required", message: "La contraseña es obligatoria."},
      {type: "maxlength", message: "La contraseña debe de tener 30 caracteres máximo"},
      {type: "minlength", message: "La contraseña debe de tener 5 caracteres mínimo"}
    ],
    celular: [
      {type: "required", message: "El celular es obligatorio."},
      {type: "maxlength", message: "La contraseña debe de tener 9 caracteres máximo"},
      {type: "minlength", message: "La contraseña debe de tener 9 caracteres mínimo"}
    ],
    direccion: [
      {type: "required", message: "La dirección es obligatoria."},
      {type: "maxlength", message: "La dirección debe de tener 2 caracteres máximo"},
      {type: "minlength", message: "La dirección debe de tener 50 caracteres mínimo"}
    ]
  }



  constructor(
    private formBuilder: FormBuilder,
    ) {
    this.registerForm = this.formBuilder.group({
      nombre: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ])
      ),
      apellido: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ])
      ),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
      ])
      ),
      contrasena: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ])
      ),
      celular: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ])
      ),
      direccion: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ])
      ),

    })
  }

  ngOnInit(): void {

  }

  registerUser(data: Object) {
    console.log('Registrado')
  }
}
