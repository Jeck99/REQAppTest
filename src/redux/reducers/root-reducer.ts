import { combineReducers } from "redux";
import { tradesReducer } from "./trades-reducer";
import { viewReducer } from "./view-reducer";

import { AppState } from "../../contracts";

export const rootReducer = combineReducers<AppState>({
    viewState: viewReducer,
    tradesState: tradesReducer,
});