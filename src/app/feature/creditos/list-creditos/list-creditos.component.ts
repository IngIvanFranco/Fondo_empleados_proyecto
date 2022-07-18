import { Component, OnInit } from '@angular/core';
import { Loading } from 'notiflix';
import { Path } from 'src/app/config';

@Component({
  selector: 'app-list-creditos',
  templateUrl: './list-creditos.component.html',
  styleUrls: ['./list-creditos.component.css']
})
export class ListCreditosComponent implements OnInit {
  path:String = Path.url;
  constructor() { }

  ngOnInit(): void {
    Loading.circle()
    Loading.remove()
  }

}
