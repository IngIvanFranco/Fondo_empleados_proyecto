import { Component, OnInit } from '@angular/core';
import { Loading } from 'notiflix';
import { Path } from 'src/app/config';

@Component({
  selector: 'app-listahorro',
  templateUrl: './listahorro.component.html',
  styleUrls: ['./listahorro.component.css']
})
export class ListahorroComponent implements OnInit {
  path:String = Path.url;
  constructor() { }

  ngOnInit(): void {
    Loading.standard()
    Loading.remove()
  }

}
