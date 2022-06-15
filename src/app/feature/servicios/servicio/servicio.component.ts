import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loading, Report } from 'notiflix';
import { Path } from '../../../config';
import { ServiciosService } from '../shared/servicios.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  path:string = Path.url
  id:any
  ahorro:any
  ahorros:any

  constructor(
    private servicio:ServiciosService,
    private datosrutas:ActivatedRoute,) { }

  ngOnInit(): void {
    Loading.standard()
    this.id = this.datosrutas.snapshot.paramMap.get('id')
    this.traerdatos()
    this.traerahorros()

  }

  traerdatos(){
    this.servicio.getserviciosahorro(this.id).subscribe(res =>{
      Loading.remove()
      this.ahorro = res
    }, err=>{
      console.log(err.error);
      
      Loading.remove()
      Report.failure(
        'Fempseapto',
        'algo salio mal con el servicio',
        'OK'
      )
    })

  }

  traerahorros(){
    this.servicio.getservicios().subscribe(res =>{
      Loading.remove()
      this.ahorros = res
    }, err=>{
      Loading.remove()
      Report.failure(
        'Fempseapto',
        'algo salio mal con los servicios',
        'OK'
      )
    })
  }

  click(id:any){
this.id = id
this.traerdatos()
  }

}
