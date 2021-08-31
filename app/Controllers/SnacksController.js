import { ProxyState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";




// This console logs all snacks in an array
function _drawSnacks(){
    ProxyState.snacks.forEach(snack => {
        console.log(snack)
    });
}
export default class SnacksController{
    constructor(){
    _drawSnacks()
    }
            logSnacks(){
        console.log(ProxyState.snacks)
    }
}

