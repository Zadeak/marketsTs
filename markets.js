"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketIndividualTotal = exports.MarketTotal = exports.MarketHandicap = exports.MarketDouble = exports.Market1X2 = void 0;
const abstractMarket_1 = require("./abstractMarket");
const variableEnums_1 = require("./variableEnums");
// 1_x_2
class Market1X2 extends abstractMarket_1.Market {
    constructor(outcomes, interval = variableEnums_1.IntervalEnum.wholeMatch) {
        super(variableEnums_1.InfoEnum.MATCHWIN, variableEnums_1.CodeEnum.P1_X_P2, variableEnums_1.KindEnum.goal, interval, outcomes);
    }
}
exports.Market1X2 = Market1X2;
// double
class MarketDouble extends abstractMarket_1.Market {
    constructor(outcomes, interval = variableEnums_1.IntervalEnum.wholeMatch) {
        super(variableEnums_1.InfoEnum.DOUBLE, variableEnums_1.CodeEnum.DOUBLE, variableEnums_1.KindEnum.goal, interval, outcomes);
    }
}
exports.MarketDouble = MarketDouble;
// handicap
class MarketHandicap extends abstractMarket_1.Market {
    constructor(outcomes, value, interval = variableEnums_1.IntervalEnum.wholeMatch) {
        super(variableEnums_1.InfoEnum.HANDICAP, variableEnums_1.CodeEnum.HANDICAP, variableEnums_1.KindEnum.goal, interval, outcomes, value);
    }
}
exports.MarketHandicap = MarketHandicap;
// total
class MarketTotal extends abstractMarket_1.Market {
    constructor(outcomes, value, team = "", interval = variableEnums_1.IntervalEnum.wholeMatch, info = variableEnums_1.InfoEnum.MATCHTOTAL) {
        super(info, variableEnums_1.CodeEnum.TOTAL, variableEnums_1.KindEnum.goal, interval, outcomes, value, team);
    }
    returnMarket() {
        return {
            info: this.info,
            code: this.code,
            kind: this.kind,
            interval: this.interval,
            value: this.value,
            outcomes: this.outcomes,
        };
    }
}
exports.MarketTotal = MarketTotal;
//individual total
class MarketIndividualTotal extends MarketTotal {
    constructor(outcomes, value, team, info = variableEnums_1.InfoEnum.INDIVIDUALTOTAL, interval = variableEnums_1.IntervalEnum.wholeMatch) {
        super(outcomes, value, team, interval, info);
    }
    returnMarket() {
        return {
            info: this.info,
            code: this.code,
            kind: this.kind,
            interval: this.interval,
            team: this.team,
            value: this.value,
            outcomes: this.outcomes,
        };
    }
}
exports.MarketIndividualTotal = MarketIndividualTotal;
//# sourceMappingURL=markets.js.map