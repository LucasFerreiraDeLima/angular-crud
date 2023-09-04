import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url:string = 'http://localhost:8080/usuarios'

  constructor(private http:HttpClient) { }

  selecionar():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  cadastrar(obj:Usuario):Observable<Usuario> {
    return this.http.post<Usuario>(this.url, obj);
  }

  editar(obj:Usuario):Observable<Usuario> {
    const urlId = `${this.url}/${obj.id}`;
    return this.http.put<Usuario>(urlId, obj);
  }

  remover(id:number):Observable<void> {
    return this.http.delete<void>(this.url + '/' + id)
  }
}
