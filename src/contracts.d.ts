import { TradesState } from "./redux/reducers/trades-reducer";
import { ViewState } from "./redux/reducers/view-reducer";

export interface AppState {
    tradesState: TradesState;
    viewState: ViewState;

}