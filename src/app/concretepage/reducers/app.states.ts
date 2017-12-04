import { Jersey } from '../models/jersey';

export interface AppState {
	jersey: Jersey;
}

export interface JerseyState {
	jerseys: Jersey[]
}
