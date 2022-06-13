import { Injectable } from '@angular/core';
import { Api } from '../../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConveniosService {
  api=Api.url
  constructor(
    private cliente:HttpClient
  ) { }


  getconvenios(){
    return this.cliente.get(this.api+'?convenios')
  }
}
