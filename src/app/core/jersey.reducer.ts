import { Action } from '@ngrx/store';
import { Jersey, InitialJersey } from './jersey.model';
import { SELECT_TEXT, SELECT_FONT, SELECT_NUMBER, BADGE, COMPLETE, RESET, ActionWithPayload  } from './jersey.actions';

export function jerseyReducer(state: Jersey = InitialJersey, action: ActionWithPayload<String>){
	switch(action.type){
		case SELECT_TEXT:
			return Object.assign({}, state, {
				text: action.payload
			});

		case SELECT_FONT: 
			return Object.assign({}, state, {
				font: action.payload
			});

		case SELECT_NUMBER:
			return Object.assign({}, state, {
				number: action.payload
			});

		case BADGE:
			return Object.assign({}, state, {
				badge: action.payload
			});

		case COMPLETE:
      		return Object.assign({}, state, {
        		complete: action.payload
      		});

    	case RESET:
      		return Object.assign({}, state, InitialJersey);

		default:
			return state;
	}
}