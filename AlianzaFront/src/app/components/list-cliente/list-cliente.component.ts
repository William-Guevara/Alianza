import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'email',  'telefono', 'start_date', 'end_date','acciones'];
  dataSource = new MatTableDataSource();
  listCliente: Cliente[];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private clienteService: ClienteService, public dialog: MatDialog,
              public snackBar: MatSnackBar) { }



  ngOnInit(): void {
    this.cargarClientes();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarClientes() {
    this.clienteService.getClientes().subscribe(
      (success => this.onInitSuccess(success)),
      (error => this.onInitError(error))
    );
  }

  onInitSuccess(success){
    this.listCliente = success;
    this.dataSource = new MatTableDataSource(this.listCliente);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onInitError(erorr){
    alert("error al cargar la data");
  }


}
