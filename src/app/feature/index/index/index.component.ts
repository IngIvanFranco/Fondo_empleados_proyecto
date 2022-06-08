import { Component, OnInit } from '@angular/core';
import { Path } from '../../../config';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  path:String = Path.url;
  constructor() { }

  ngOnInit(): void {
  }

}
