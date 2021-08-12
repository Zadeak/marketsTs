import { Market } from "./abstractMarket";
import { MarketType, Outcome } from "./types";
import { CodeEnum, InfoEnum, IntervalEnum, KindEnum } from "./variableEnums";

// 1_x_2

export class Market1X2 extends Market {
  info!: InfoEnum;
  code!: CodeEnum;
  kind!: KindEnum;
  interval!: IntervalEnum;
  outcomes!: Array<Outcome>;

  constructor(outcomes: Array<Outcome>, interval: IntervalEnum = IntervalEnum.wholeMatch) {
    super(InfoEnum.MATCHWIN, CodeEnum.P1_X_P2, KindEnum.goal, interval, outcomes);
  }
}

// double

export class MarketDouble extends Market {
  info!: InfoEnum;
  code!: CodeEnum;
  kind!: KindEnum;
  interval!: IntervalEnum;
  outcomes!: Array<Outcome>;

  constructor(outcomes: Array<Outcome>, interval: IntervalEnum = IntervalEnum.wholeMatch) {
    super(InfoEnum.DOUBLE, CodeEnum.DOUBLE, KindEnum.goal, interval, outcomes);
  }
}

// handicap
export class MarketHandicap extends Market {
  info!: InfoEnum;
  code!: CodeEnum;
  kind!: KindEnum;
  value!: number;
  interval!: IntervalEnum;
  outcomes!: Array<Outcome>;

  constructor(outcomes: Array<Outcome>, value: number, interval: IntervalEnum = IntervalEnum.wholeMatch) {
    super(InfoEnum.HANDICAP, CodeEnum.HANDICAP, KindEnum.goal, interval, outcomes, value);
  }
}

// total
export class MarketTotal extends Market {
  info!: InfoEnum;
  code!: CodeEnum;
  kind!: KindEnum;
  interval!: IntervalEnum;
  team!: string;
  value!: number;
  outcomes!: Array<Outcome>;

  constructor(outcomes: Array<Outcome>, value: number, team: string = "", interval: IntervalEnum = IntervalEnum.wholeMatch, info: InfoEnum = InfoEnum.MATCHTOTAL) {
    super(info, CodeEnum.TOTAL, KindEnum.goal, interval, outcomes, value, team);
  }

  returnMarket(): MarketType {
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

//individual total

export class MarketIndividualTotal extends MarketTotal {
  constructor(outcomes: Array<Outcome>, value: number, team: string, info: InfoEnum = InfoEnum.INDIVIDUALTOTAL, interval: IntervalEnum = IntervalEnum.wholeMatch) {
    super(outcomes, value, team, interval, info);
  }

  returnMarket(): MarketType {
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
