import { Component, OnInit } from '@angular/core';
import { Loading } from 'notiflix';
import { Path } from 'src/app/config';
import { ConveniosService } from '../shared/convenios.service';

@Component({
  selector: 'app-list-convenio',
  templateUrl: './list-convenio.component.html',
  styleUrls: ['./list-convenio.component.css']
})
export class ListConvenioComponent implements OnInit {
  path:String = Path.url;
convenios:any
  constructor(
    private service:ConveniosService,
  ) { }

  ngOnInit(): void {
    Loading.standard()

this.getconvenios()
  }


  getconvenios(){
this.service.getconvenios().subscribe(res=>{
  this.convenios = res
Loading.remove()

})
  }

}
