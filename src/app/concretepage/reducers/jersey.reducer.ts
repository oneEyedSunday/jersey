import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/jersey.actions';
import { InitialJersey, Jersey } from '../models/jersey';
import { JerseyState } from './app.states';

export function reducer(state: Jersey = InitialJersey, action:fromActions.Actions): Jersey {
	switch(action.type){
		case fromActions.SELECT_TEXT:
			return Object.assign({}, state, {
				text: action.payload 
			});

		case fromActions.SELECT_FONT: 
			return Object.assign({}, state, {
				font: action.payload
			});

		case fromActions.SELECT_NUMBER:
			return Object.assign({}, state, {
				number: action.payload
			});

		case fromActions.BADGE:
			return Object.assign({}, state, {
				badge: action.payload
			});

		case fromActions.BADGE_POSITION:
			return Object.assign({}, state, {
				badge_position: action.payload
			})

		case fromActions.BASE:
			return Object.assign({}, state, {
				base: action.payload
			});

		case fromActions.SELECT_PRI_COLOR:
			return Object.assign({}, state, {
				pricolor: action.payload
			});

		case fromActions.SELECT_SEC_COLOR:
			return Object.assign({}, state, {
				seccolor: action.payload
			});

		case fromActions.COMPLETE:
      		return Object.assign({}, state, {
        		complete: action.payload
      		});

    	case fromActions.RESET:
      		return Object.assign({}, state, InitialJersey);

		default: 
			return InitialJersey;
	}
}

export const getJersey = createFeatureSelector<Jersey>('jersey');
