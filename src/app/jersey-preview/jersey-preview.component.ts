import { Component, Input, OnInit, OnChanges, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Jersey, InitialJersey } from './../concretepage/models/jersey';
import { DomSanitizer } from '@angular/platform-browser';
import { ElementRef, ViewChild, AfterViewInit, AfterViewChecked, SimpleChanges } from '@angular/core';
// import fs;

@Component({
  selector: 'app-jersey-preview',
  templateUrl: './jersey-preview.component.html',
  styleUrls: ['./jersey-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class JerseyPreviewComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() jersey: Jersey;
  @Input() context: boolean = false;
  // context variable, either set data or embed
  svgSrc: any;
  badgeSrc = '';
  priColor = '';
  text: string;
  textColor: string;
  textFont: string;
  kitnumber: string;
  @ViewChild('test') test: ElementRef;
  @ViewChild('edited') edited: ElementRef;
  s: any;
  e: any = null;
  loaded: boolean = false;
  svgContent: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges) {
  	if (!this.context){
  		this.loaded = this.s ? true : false;
  	this.badgeSrc = `assets/images/${this.jersey.badge}.svg`;
  	if(changes.jersey.previousValue !== undefined){
  		if(changes.jersey.currentValue.base !== changes.jersey.previousValue.base){
  			this.svgSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`assets/images/${this.jersey.base}.svg`);
  			console.log("reassignment of src");	
  			// if source changed, call prepFills to redraw.
  		}
  	}else {
  		this.svgSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`assets/images/${this.jersey.base}.svg`);
  	}

  	this.priColor = this.jersey.pricolor;
  	this.text = this.jersey.text;
  	this.textColor = this.jersey.seccolor;
  	this.textFont = this.jersey.font;
  	this.kitnumber = this.jersey.number;
  	this.loaded ? this.prepFills() : null;
  	}
  	
  }

  ngAfterViewInit(){
  	if(!this.context){
  		this.e = this.test.nativeElement;
  	setTimeout(() => {
  		this.s = this.e.contentDocument.getElementsByTagName('svg')[0];
  	}, 200);
  	}else{
  		setTimeout(()=> {
  			this.svgContent = this.getEdited();
  			console.log(this.svgContent.documentElement);
  			this.edited.nativeElement.append(this.svgContent.documentElement);
  			
  		}, 200);
  		// console.log(this.svgContent);
  	}
  	
  }

  prepFills(){
	  	this.s = this.test.nativeElement.contentDocument.getElementsByTagName('svg')[0];
	  	
	  	if(this.text){
	  		this.print_text(this.s, "text");
	  	}

	  	if(this.kitnumber){
			this.print_text(this.s, "kit_number")
	  	}

	  	if (this.jersey.badge !== InitialJersey.badge){
	  		this.draw_badge(this.s, this.jersey.badge_position);
	  	}

	  	if(this.priColor !== InitialJersey.pricolor){
	  		this.s.setAttribute("fill", this.priColor);
	  	}

  }


  private print_text(graph: any, type: string){

	  	// remove previous text of sme id
	  	let ga: Array<any> = Array.from(graph.children);
	  	let killid = type == "kit_number" ? "kitn" : "sponsor";
	  	for(var i = ga.length - 1; i >= 0; i--){
	  		if (ga[i].getAttribute("id") == killid){
	  			graph.removeChild(graph.children[i]);
	  		}
	  	}

	  	// set id to denote whether jersey number or text on front
	  	let t = document.createElementNS("http://www.w3.org/2000/svg", 'text');
	  	t.setAttribute('id', killid);
	  	// position of kit number will depend on badge
	  	t.setAttribute('font-family', this.textFont);
	  	t.setAttribute('font-size', '50');
	  	t.setAttribute('font-weight', 'bold');
	  	t.setAttribute('fill', this.textColor || "black");
	  	t.innerHTML = type == "kit_number" ? this.kitnumber : this.text;
	  	// typpe will dicttae y
	  	// y of text is the bottom of starting letter
	  	if(type == "kit_number"){
	  		// kit number
	  		// position based on badge
	  		let xx;
	  		if(this.jersey.badge_position == "left"){
	  			xx = "300";
	  		}else {
	  			xx = "160";
	  		}
	  		t.setAttribute('x', xx);
	  		t.setAttribute('y', '180');
	  	}else {
	  		// positioning for sponsor text
	  		// check length
	  		// offset based on length
	  		t.setAttribute('y', '250');
	  		if(this.text.length < 5 ){
	  			t.setAttribute('x', '180');
	  		}else {
	  			t.setAttribute('x', '150');
	  		}
	  	}
	  	graph.appendChild(t);
  }

  private draw_badge(graph: any, position: string){
	  	// check first if thers an image already\
	  	// if so remove
	  	let ga: Array<Node> = Array.from(graph.children);
	  	for(var i = ga.length - 1; i >= 0; i--){
	  		if (ga[i].localName == "image"){
	  			graph.removeChild(graph.children[i]);
	  		}
	  	}
	  	
	  	let b = document.createElementNS("http://www.w3.org/2000/svg", 'image');
	  	b.setAttribute('y', '140');
	  	b.setAttribute('width', '50');
	  	b.setAttribute('height', '50');
	  	b.setAttribute('href', `${this.jersey.badge}`);
	  	switch (position) {
	  		case "left":
	  			b.setAttribute('x', '160');
	  			break;
	  		case "center":
	  			b.setAttribute('x', '220');
	  			break;
	  		default:
	  			// right
	  			b.setAttribute('x', '300');
	  			break;
	  	}
	  	graph.appendChild(b);	
  }


  private writeBlobToLocalStorage(){
  	let serializer = new XMLSerializer();
  	let data = serializer.serializeToString(this.s).replace('href=', 'href="assets/images/');
    console.log()
  	localStorage.setItem("saved-blob", data);
  }

  ngOnDestroy(){
  	if(!this.context){
  		this.writeBlobToLocalStorage();
  	}
  	
  }

  getBlobFromLocalStorage(){
  	return localStorage.getItem("saved-blob");
  }

  private getEdited(){
  	let oDom = new DOMParser();
  	let origdata = this.getBlobFromLocalStorage();
  	let data = oDom.parseFromString(origdata, "text/xml");
  	return data;
  }



}
