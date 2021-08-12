import { OutcomeName } from "./variableEnums";

export type Outcome = {
  name: OutcomeName;
  odd: number;
};

export type MarketType = {
  info: string;
  code: string;
  kind: string;
  interval: string;
  outcomes: Array<Outcome>;
  team?: string;
  value?: number;
};
