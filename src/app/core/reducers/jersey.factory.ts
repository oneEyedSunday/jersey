import { ActionReducerMap } from '@ngrx/store';
import * as jerseyReducer from './jersey.reducer';

import { JerseyStore } from './jersey.store';

export const reducers: ActionReducerMap<JerseyStore> = {
	jerseySlice: jerseyReducer.reducer
}