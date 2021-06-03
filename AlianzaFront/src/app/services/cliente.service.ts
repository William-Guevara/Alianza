import { environment } from './../../environments/environment';
import { Cliente } from './../models/Cliente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  listCliente: Cliente[] = [];

  constructor(
    private http: HttpClient
  ) {

  }

  getClientes() :Observable<Cliente[]>{
    let header = new HttpHeaders().set('Tipe-content', 'aplication/json')
    const sellersUrl = `${environment.apiUrl}listarClientes`;
    return this.http.get<Cliente[]>(sellersUrl, {
      headers: header
    });
  }


  agregarCliente(cliente: Cliente) : Observable<Cliente>{
    const sellersUrl = `${environment.apiUrl}guardarCliente`;
    return this.http.post<Cliente>(sellersUrl, cliente);
  }

  getCliente(index: number): Observable<Cliente>{
    const sellersUrl = `${environment.apiUrl}${index}`;
    return this.http.get<Cliente>(sellersUrl)
  }
}
