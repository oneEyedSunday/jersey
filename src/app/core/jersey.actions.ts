import { Action } from '@ngrx/store';
export const SELECT_TEXT = 'SELECT_TEXT';
export const SELECT_FONT = 'SELECT_FONT';
export const SELECT_NUMBER = 'SELECT_NUMBER';
export const BADGE = 'SELECT_BADGE';
export const COMPLETE = 'COMPLETE';
export const RESET = 'RESET';

export interface ActionWithPayload<String> extends Action {
  payload: String;
}