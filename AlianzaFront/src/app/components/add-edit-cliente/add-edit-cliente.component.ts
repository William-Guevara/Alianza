import { Component, OnInit } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-edit-cliente',
  templateUrl: './add-edit-cliente.component.html',
  styleUrls: ['./add-edit-cliente.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }]
})
export class AddEditClienteComponent implements OnInit {
  id_cliente: any;
  accion = 'Crear';
  cliente:Cliente;

  myForm: FormGroup;
  constructor(private fb: FormBuilder,
    private clienteService: ClienteService,
    private route: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute) {

    this.myForm = this.fb.group({
      id_cliente: [''],
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]]

    });
    const idParam = 'id';
    this.id_cliente = this.aRoute.snapshot.params[idParam];

  }

  ngOnInit(): void {
    if (this.id_cliente !== undefined) {
      this.accion = 'Editar';
      this.esEditar();
    }
  }

  guardarCliente() {
    const cliente: Cliente = {
      id_cliente: this.myForm.get('id_cliente').value,
      nombre: this.myForm.get('nombre').value,
      email: this.myForm.get('email').value,
      telefono: this.myForm.get('telefono').value,
      start_date: this.myForm.get('start_date').value,
      end_date: this.myForm.get('end_date').value
    };

    this.clienteService.agregarCliente(cliente).subscribe(
      (success => this.onAgregarSuccess(success)),
      (error => this.onAgregarError(error))
    );
  }

  onAgregarSuccess(success){
    this.snackBar.open('El cliente fue registrado con exito!', '', {
      duration: 3000,
    });
    this.route.navigate(['/']);
  }

  onAgregarError(error){
    this.snackBar.open('El cliente no pudo ser registrado verifica los campos!', '', {
      duration: 3000,
    });
  }

  esEditar() {
    this.clienteService.getCliente(this.id_cliente).subscribe(
      (success=> this.onInitiSuccess(success)),
      (error=> this.onInitError(error))
    );
  }
  onInitiSuccess(success){
    console.log(success);
    this.myForm.patchValue({
      id_cliente: success.id_cliente,
      nombre: success.nombre,
      email: success.email,
      telefono: success.telefono,
      start_date: success.start_date,
      end_date: success.end_date
    });
  }

  onInitError(erorr){
    alert("error al cargar la data");
  }

}
