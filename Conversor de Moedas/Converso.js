"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Version: 1.0
function ConvertCurrency(BRLamount, USDprice) {
    const USD = 1;
    return (USD * BRLamount) / USDprice;
}
exports.default = {
    ConvertCurrency
};
