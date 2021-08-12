"use strict";
/**
 * Класс Создатель объявляет фабричный метод, который должен возвращать объект
 * класса Продукт. Подклассы Создателя обычно предоставляют реализацию этого
 * метода.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const markets_1 = require("./markets");
const variableEnums_1 = require("./variableEnums");
var outcomeArray = [];
const newOutcome = { name: variableEnums_1.OutcomeName.HOME, odd: 2.5 };
outcomeArray.push(newOutcome);
const testMarket = new markets_1.Market1X2(outcomeArray).returnMarket();
const test2Market = new markets_1.MarketTotal(outcomeArray, 5).returnMarket();
const IndividualMarket = new markets_1.MarketIndividualTotal(outcomeArray, 5, "Home").returnMarket();
const doubleMarket = new markets_1.MarketDouble(outcomeArray).returnMarket();
const handicapMarket = new markets_1.MarketHandicap(outcomeArray, 3.0).returnMarket();
console.log(testMarket);
console.log(test2Market);
console.log(IndividualMarket);
console.log(doubleMarket);
console.log(handicapMarket);
//# sourceMappingURL=index.js.map