
import MoneyController from "./Controllers/MoneyController.js"
import { Snack } from "./Models/Snack.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"




class AppState extends EventEmitter {
  /** @type {Snack[]} */
  snacks = [new Snack('Twix', 2), new Snack('Almond Joy', 2), new Snack('Snickers', 1.5), new Snack('Mounds', 1)]
  money = 0

}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
