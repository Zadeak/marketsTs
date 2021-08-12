/**
 * Класс Создатель объявляет фабричный метод, который должен возвращать объект
 * класса Продукт. Подклассы Создателя обычно предоставляют реализацию этого
 * метода.
 */

import { MarketIndividualTotal, Market1X2, MarketTotal, MarketDouble, MarketHandicap } from "./markets";
import { Outcome } from "./types";
import { OutcomeName } from "./variableEnums";

var outcomeArray: Array<Outcome> = [];
const newOutcome: Outcome = { name: OutcomeName.HOME, odd: 2.5 };
outcomeArray.push(newOutcome);
const testMarket = new Market1X2(outcomeArray).returnMarket();
const test2Market = new MarketTotal(outcomeArray, 5).returnMarket();
const IndividualMarket = new MarketIndividualTotal(outcomeArray, 5, "Home").returnMarket();
const doubleMarket = new MarketDouble(outcomeArray).returnMarket();
const handicapMarket = new MarketHandicap(outcomeArray, 3.0).returnMarket();
console.log(testMarket);
console.log(test2Market);
console.log(IndividualMarket);
console.log(doubleMarket);
console.log(handicapMarket);
