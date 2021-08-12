"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = void 0;
class Market {
    constructor(info, code, kind, interval, outcomes, value, team) {
        this.info = info;
        this.code = code;
        this.kind = kind;
        this.interval = interval;
        this.outcomes = outcomes;
        this.value = value;
        this.team = team;
        this.checkLenght();
    }
    checkLenght() {
        if (this.outcomes.length < 1) {
            throw new Error("Outcomes are empty");
        }
    }
    returnMarket() {
        return {
            info: this.info,
            code: this.code,
            kind: this.kind,
            interval: this.interval,
            outcomes: this.outcomes,
        };
    }
}
exports.Market = Market;
//# sourceMappingURL=abstractMarket.js.map