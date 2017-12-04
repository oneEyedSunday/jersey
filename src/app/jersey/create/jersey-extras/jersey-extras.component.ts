import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-jersey-extras',
  templateUrl: './jersey-extras.component.html',
  styleUrls: ['./jersey-extras.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JerseyExtrasComponent  {
  jerseyBadge: string = '';
  jerseyBadgePosition: string = 'right';
  @Output() selectBadgeEvent = new EventEmitter;
  @Output() selectBadgePositionEvent = new EventEmitter;
  constructor() { }

  selectBadge(badge: string){
  	this.selectBadgeEvent.emit(badge);
  }

  selectBadgePosition(position: string){
    this.selectBadgePositionEvent.emit(position);
  }

}
