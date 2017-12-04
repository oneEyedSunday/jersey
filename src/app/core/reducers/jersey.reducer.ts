import *  as JERSEY_ACTIONS from './jersey.actions';

export interface JerseySlice {
		font: string,
		text: string,
		number: string,
		badge: string,
		base: string,
		complete: boolean
}

let initialState: JerseySlice = {
	font: '',
		text: '',
		number: '',
		badge: '',
		base: '',
		complete: false
}


export function reducer(state: JerseySlice = initialState, action: JERSEY_ACTIONS.Actions): JerseySlice {
	switch(action.type){
		case JERSEY_ACTIONS.SELECT_TEXT:
			return Object.assign({}, state, {
				text: action.payload 
			});

		case JERSEY_ACTIONS.SELECT_FONT: 
			return Object.assign({}, state, {
				font: action.payload
			});

		case JERSEY_ACTIONS.SELECT_NUMBER:
			return Object.assign({}, state, {
				number: action.payload
			});

		case JERSEY_ACTIONS.BADGE:
			return Object.assign({}, state, {
				badge: action.payload
			});

			

		case JERSEY_ACTIONS.COMPLETE:
      		return Object.assign({}, state, {
        		complete: action.payload
      		});

    	case JERSEY_ACTIONS.RESET:
      		return Object.assign({}, state, initialState);

		default:
			return state;
	}
}