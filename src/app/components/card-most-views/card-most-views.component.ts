import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-most-views',
  templateUrl: './card-most-views.component.html',
  styleUrls: ['./card-most-views.component.css']
})
export class CardMostViewsComponent implements OnInit {
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""

  @Input()
  id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
