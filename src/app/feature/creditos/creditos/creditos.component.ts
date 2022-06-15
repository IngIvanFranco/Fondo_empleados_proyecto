import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loading, Report } from 'notiflix';
import { CreditosService } from '../shared/creditos.service';

import { Path } from '../../../config';


@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent implements OnInit {
credito:any
creditos:any
path:string = Path.url
id:any
  constructor(
    private datosrutas:ActivatedRoute,
    private service:CreditosService,
  ) { }

  ngOnInit(): void {
    Loading.standard()
    this.id = this.datosrutas.snapshot.paramMap.get('id');
    this.service.getcreditos().subscribe(res=>{
      this.creditos = res
      console.log(res);

      Loading.remove()
    }, err=>{
      Report.failure(
        'Fempseapto',
        'algo salio mal',
        'OK'
      )
      console.log(err.error);

      Loading.remove()
    })


    this.traerdatos()
  }


traerdatos(){

  this.service.getcredito(this.id).subscribe(res=>{
    this.credito = res
    console.log(res);

    Loading.remove()
  }, err=>{
    Report.failure(
      'Fempseapto',
      'algo salio mal',
      'OK'
    )
    console.log(err.error);

    Loading.remove()
  })
}


  click(id:any){
    Loading.standard()
    this.id = id
    this.traerdatos()

  }

}
