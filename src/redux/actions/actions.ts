import { tradesConstants } from "../constants/trades-constants";
import { Trade } from "../../Trades";
import { viewConstants } from "../constants/view-constants";
export const allActions = {
    getTradesAction,
    addTradeAction,
    removeTradeAction,
    taggleView
}
export function getTradesAction(trades: Trade[]) {
    return {
        type: tradesConstants.GET_TRADE,
        payload: trades
    }
}
export function addTradeAction(trade: Trade) {
    return {
        type: tradesConstants.ADD_TRADE,
        payload: trade
    }
}
export function removeTradeAction(id: number) {
    return {
        type: tradesConstants.REMOVE_TRADE,
        payload: id
    }
}
export function taggleView() {
    return {
        type: viewConstants.TAGGLE_MENU,
    }
}