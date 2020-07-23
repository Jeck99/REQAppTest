import { Reducer } from "redux";
import { viewConstants } from "../constants/view-constants";

export interface ViewState {
    taggleMenu: boolean;
}
const initialState: ViewState = {
    taggleMenu: false
}
export const viewReducer: Reducer<ViewState> = (state = initialState, action) => {
    switch(action.type) {
        case viewConstants.TAGGLE_MENU:
            return {
                taggleMenu: !state.taggleMenu
            }
        default:
            return state;
    }
}