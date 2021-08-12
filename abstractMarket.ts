import { CodeEnum, InfoEnum, IntervalEnum, KindEnum } from "./variableEnums";
import { MarketType, Outcome } from "./types";
export abstract class Market {
  info: InfoEnum;
  code: CodeEnum;
  kind: KindEnum;
  interval: IntervalEnum;
  team?: string;
  value?: number;
  outcomes: Array<Outcome>;

  constructor(info: InfoEnum, code: CodeEnum, kind: KindEnum, interval: IntervalEnum, outcomes: Array<Outcome>, value?: number, team?: string) {
    this.info = info;
    this.code = code;
    this.kind = kind;
    this.interval = interval;
    this.outcomes = outcomes;
    this.value = value;
    this.team = team;
    this.checkLenght();
  }

  private checkLenght() {
    if (this.outcomes.length < 1) {
      throw new Error("Outcomes are empty");
    }
  }
  returnMarket(): MarketType {
    return {
      info: this.info,
      code: this.code,
      kind: this.kind,
      interval: this.interval,
      outcomes: this.outcomes,
    };
  }
}
