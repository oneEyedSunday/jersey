import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import {getJersey} from './../../concretepage/reducers/jersey.reducer';
import { RESET } from './../../concretepage/actions/jersey.actions';
import { Jersey } from './../../concretepage/models/jersey';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompleteComponent implements OnInit, OnDestroy {
  jerseyState$: Observable<Jersey>;
  private jerseyStateSubscription: Subscription;
  jersey: Jersey;
  context = true;

  @ViewChild('test') test: ElementRef;


  constructor(private store: Store<Jersey>) {
  	this.jerseyState$ = store.select(getJersey);
  }

  ngOnInit() {
  	let oDom = new DOMParser();

  	this.jerseyStateSubscription = this.jerseyState$.subscribe((state) => {
  		this.jersey = state;
  	});
  	// might not need subscription tho;
  }

  ngOnDestroy(){
  	this.jerseyStateSubscription.unsubscribe();
  }

  newJersey(){
  	this.store.dispatch({
  		type: RESET
  	});
  }

}
