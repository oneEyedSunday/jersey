import { Action } from '@ngrx/store';
import { Jersey } from '../models/jersey';
export const SELECT_TEXT = 'SELECT_TEXT';
export const SELECT_FONT = 'SELECT_FONT';
export const SELECT_NUMBER = 'SELECT_NUMBER';
export const BADGE = 'SELECT_BADGE';
export const BADGE_POSITION = 'BADGE_POSITION';
export const BASE = 'SELECT_BASE';
export const SELECT_PRI_COLOR =  'SELECT_PRI_COLOR';
export const SELECT_SEC_COLOR = 'SELECT_SEC_COLOR';
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

export class BadgePosition implements Action {
	readonly type = BADGE_POSITION;
	constructor(public payload: String){}
}

export class Base implements Action {
	readonly type = BASE;
	constructor(public payload: String){}
}

export class SelectPriColor implements Action{
	readonly type = SELECT_PRI_COLOR;
	constructor(public payload: String){}
}

export class SelectSecColor implements Action{
	readonly type = SELECT_SEC_COLOR;
	constructor(public payload: String){}
}

export class Complete implements Action {
	readonly type = COMPLETE;
	constructor(public payload: String){}
}

export class Reset implements Action {
	readonly type = RESET;
}

export type Actions = SelectText | SelectFont | SelectNumber | Badge | BadgePosition | Base | SelectPriColor | SelectSecColor | Reset | Complete;