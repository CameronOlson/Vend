import { ProxyState } from "../AppState.js";
import MoneyController from "../Controllers/MoneyController.js";


class MoneyService{
    constructor(){
            console.log('this MoneyService working')
    }
    addDollar(){
        ProxyState.money++
    }
}

export const moneyService = new MoneyService()