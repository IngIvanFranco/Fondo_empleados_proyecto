import { Injectable } from '@angular/core';
import { Api } from '../../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  api=Api.url

  constructor(
    private cliente:HttpClient
    ) { }

    getserviciosahorro(id:any){
return this.cliente.get(this.api+'?servicio='+id)
    }

    getservicios(){
      return this.cliente.get(this.api+'?servicios')
    }
}
