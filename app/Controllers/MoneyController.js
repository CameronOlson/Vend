import { ProxyState } from "../AppState.js";
import { moneyService } from "../Services/MoneyServise.js";


export default class MoneyController{
         getMoney(){
        moneyService.addDollar()
    console.log("money", ProxyState.money)
    }
}