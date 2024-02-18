import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.scss']
})
export class GuitarComponent implements OnInit {


  constructor(public data: DataService) { }

  ngOnInit(): void {
  }


  changeName() {
    this.data.name = 'Nolasco';

  }
}
