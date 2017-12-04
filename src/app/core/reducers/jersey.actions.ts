import { Action } from '@ngrx/store';
export const SELECT_TEXT = 'SELECT_TEXT';
export const SELECT_FONT = 'SELECT_FONT';
export const SELECT_NUMBER = 'SELECT_NUMBER';
export const BADGE = 'SELECT_BADGE';
export const COMPLETE = 'COMPLETE';
export const RESET = 'RESET';

export class SelectText implements Action {
	readonly type = SELECT_TEXT;
	constructor(public payload: String){}
}

export class SelectFont implements Action {
	readonly type = SELECT_FONT;
	constructor(public payload: String){}
}


export class SelectNumber implements Action {
	readonly type = SELECT_NUMBER;
	constructor(public payload: String){}
}

export class Badge implements Action {
	readonly type = BADGE;
	constructor(public payload: String){}
}

export class Complete implements Action {
	readonly type = COMPLETE;
	constructor(public payload: String){}
}

export class Reset implements Action {
	readonly type = RESET;
}

export type Actions = SelectText | SelectFont | SelectNumber | Badge | Reset | Complete;