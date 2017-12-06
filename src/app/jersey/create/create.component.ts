import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
// import { Jersey  } from './../../core/jersey.model';
// import { SELECT_TEXT, SELECT_FONT, SELECT_NUMBER, BADGE, COMPLETE, RESET } from './../../core/jersey.actions';

import * as jerseyReducer from './../../concretepage/reducers/jersey.reducer';
import * as fromActions from './../../concretepage/actions/jersey.actions';
import { Jersey } from './../../concretepage/models/jersey';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit, OnDestroy {

  jerseyState$: Observable<Jersey>;
  private jerseyStateSubscription: Subscription;
  jersey: Jersey;
  done = false;

  constructor(private store: Store<Jersey>) {
  	this.jerseyState$ = store.select(jerseyReducer.getJersey);
  }

  ngOnInit() {
    this.jerseyStateSubscription = this.jerseyState$.subscribe((state) => {
      this.jersey = state;
      this.done = !!(this.jersey.base && this.jersey.number);
    });
  }

  ngOnDestroy(){
    this.jerseyStateSubscription.unsubscribe();
  }

  addTextHandler(text: string){
    this.store.dispatch({
      type: fromActions.SELECT_TEXT,
      payload: text
    });
  }

  selectNumberHandler(number: string){
    this.store.dispatch({
      type: fromActions.SELECT_NUMBER,
      payload: number
    });
  }

  selectFontHandler(font: string){
    this.store.dispatch({
      type: fromActions.SELECT_FONT,
      payload: font
    });
  }

  selectBaseHandler(base: string){
    this.store.dispatch({
      type: fromActions.BASE,
      payload: base
    });
  }

  selectBadgeHandler(badge: string){
    this.store.dispatch({
      type: fromActions.BADGE,
      payload: badge
    });
  }

  selectBadgePositionHandler(position: string){
    this.store.dispatch({
      type: fromActions.BADGE_POSITION,
      payload: position
    })
  }

  selectPriColorHandler(color: string){
    this.store.dispatch({
      type: fromActions.SELECT_PRI_COLOR,
      payload: color
    });
  }

  selectSecColorHandler(color: string){
    this.store.dispatch({
      type: fromActions.SELECT_SEC_COLOR,
      payload: color
    });
  }

  submit(){
    this.store.dispatch({
      type: fromActions.COMPLETE,
      payload: true
    })
  }

}
