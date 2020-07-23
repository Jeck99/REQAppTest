import { Reducer } from "redux";
import { tradesConstants } from "../constants/trades-constants";
import { Trade } from "../../Trades";

export interface TradesState {
    trades: Trade[];
}

const initialState: TradesState = {

    trades: [
        {
            _id: 0,
            picture: "http://placehold.it/32x32",
            tradeName: "Erica",
            company: "OBLIQ",
            status: "constraction",
            contracts: "Pre-contract",
            contractValue: 0
        },
        {
            _id: 1,
            picture: "http://placehold.it/32x32",
            tradeName: "Erica",
            company: "OBLIQ",
            status: "constraction",
            contracts: "Pre-contract",
            contractValue: 0
        },
        {
            _id: 2,
            picture: "http://placehold.it/32x32",
            tradeName: "Erica",
            company: "OBLIQ",
            status: "constraction",
            contracts: "Pre-contract",
            contractValue: 0
        },
        {
            _id: 3,
            picture: "http://placehold.it/32x32",
            tradeName: "Erica",
            company: "OBLIQ",
            status: "constraction",
            contracts: "Pre-contract",
            contractValue: 0
        },
        {
            _id: 4,
            picture: "http://placehold.it/32x32",
            tradeName: "Erica",
            company: "OBLIQ",
            status: "constraction",
            contracts: "Pre-contract",
            contractValue: 0
        },
    ]
}

export const tradesReducer: Reducer<TradesState> = (state = initialState, action) => {    
    switch (action.type) {
        case tradesConstants.GET_TRADE:
            return {
                ...state,
                trades: [...state.trades, action.payload]
            }
        case tradesConstants.ADD_TRADE:
            return {
                ...state,
                trades: [...state.trades, {...action.payload}]
            }
        case tradesConstants.REMOVE_TRADE:
            const id = action.payload;
            return {
                ...state,
                trades: state.trades.filter(tradeItem => tradeItem._id !== id)
            }
        default:
            return state;
    }
} 