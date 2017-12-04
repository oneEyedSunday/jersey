import { Component, ViewEncapsulation,Output, EventEmitter, AfterViewInit } from '@angular/core';
import { InitialJersey } from './../../../concretepage/models/jersey';

@Component({
  selector: 'app-jersey-text',
  templateUrl: './jersey-text.component.html',
  styleUrls: ['./jersey-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JerseyTextComponent {
  jerseyTextInput = InitialJersey.text;
  jerseyNumberInput = InitialJersey.number; 
  fontType = InitialJersey.font;
  // should sync inputs
  jerseyPrimaryColorInput = InitialJersey.pricolor;
  jerseySecondaryColorInput = InitialJersey.seccolor;
  @Output() selectFontEvent = new EventEmitter;
  @Output() addTextEvent = new EventEmitter;
  @Output() selectJerseyNumberEvent = new EventEmitter;
  @Output() selectPrimaryColorEvent = new EventEmitter;
  @Output() selectSecondaryColorEvent = new EventEmitter;
  constructor() { }
 	

  // when listing fonts
  // display font in themselves	
  selectFont(fontType: string){
  	this.selectFontEvent.emit(fontType);
  }

  // todo
  // add validation to reduce length
  addText(text: string){
  	this.addTextEvent.emit(text);
  }

  selectNumber(kitnumber: string){
  	this.selectJerseyNumberEvent.emit(kitnumber);
  }

  selectPrimaryColor(color: string){
  	this.selectPrimaryColorEvent.emit(color);
  }

  selectSecondaryColor(color: string){
  	this.selectSecondaryColorEvent.emit(color);
  }

}
