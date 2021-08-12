"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomeName = exports.KindEnum = exports.InfoEnum = exports.CodeEnum = exports.IntervalEnum = void 0;
var IntervalEnum;
(function (IntervalEnum) {
    IntervalEnum["wholeMatch"] = "FT";
    IntervalEnum["firstHalf"] = "H1";
    IntervalEnum["secondHalf"] = "H2";
})(IntervalEnum = exports.IntervalEnum || (exports.IntervalEnum = {}));
var CodeEnum;
(function (CodeEnum) {
    CodeEnum["P1_X_P2"] = "W3";
    CodeEnum["W2"] = "W2";
    CodeEnum["DOUBLE"] = "WX";
    CodeEnum["TOTAL"] = "TOT";
    CodeEnum["HANDICAP"] = "HCP";
})(CodeEnum = exports.CodeEnum || (exports.CodeEnum = {}));
var InfoEnum;
(function (InfoEnum) {
    InfoEnum["MATCHWIN"] = "Match win (3x)";
    InfoEnum["DOUBLE"] = "Doubles";
    InfoEnum["MATCHTOTAL"] = "Math Total";
    InfoEnum["HANDICAP"] = "Handicap";
    InfoEnum["INDIVIDUALTOTAL"] = "Individual Total";
})(InfoEnum = exports.InfoEnum || (exports.InfoEnum = {}));
var KindEnum;
(function (KindEnum) {
    KindEnum["goal"] = "goal";
})(KindEnum = exports.KindEnum || (exports.KindEnum = {}));
var OutcomeName;
(function (OutcomeName) {
    OutcomeName["HOME"] = "HOME";
    OutcomeName["AWAY"] = "AWAY";
    OutcomeName["DRAW"] = "DRAW";
    OutcomeName["NONE"] = "NONE";
    OutcomeName["OVER"] = "OVER";
    OutcomeName["UNDER"] = "UNDER";
    OutcomeName["YES"] = "YES";
    OutcomeName["NO"] = "NO";
})(OutcomeName = exports.OutcomeName || (exports.OutcomeName = {}));
//# sourceMappingURL=variableEnums.js.map