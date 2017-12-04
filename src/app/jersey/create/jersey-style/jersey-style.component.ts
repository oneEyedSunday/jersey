import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jersey-style',
  templateUrl: './jersey-style.component.html',
  styleUrls: ['./jersey-style.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JerseyStyleComponent implements OnInit {

	jerseyStyle: string;
	@Output() selectBaseEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectBase(style: string){
  	this.selectBaseEvent.emit(style);
  }

}
