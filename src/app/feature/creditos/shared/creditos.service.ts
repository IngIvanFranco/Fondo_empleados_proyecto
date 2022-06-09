import { Injectable } from '@angular/core';
import { Api } from '../../../config';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CreditosService {
      api=Api.url

  constructor(
    private cliente:HttpClient
  ) { }

  getcreditos(){
    return this.cliente.get(this.api+'?creditos')
  }

  getcredito(id:any){
    return this.cliente.get(this.api+`?credito=${id}`)
  }



}
