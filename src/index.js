"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Conversor_1 = __importDefault(require("../Conversor de Moedas/Conversor"));
const app = (0, express_1.default)();
const port = 2000;
app.get('/convert', (req, res) => {
    // const { from, to, amount } = req.query;
    // if (!from || !to || !amount) {
    //     return res.status(400).send('Missing query parameters');
    // }
    // // Conversor de moedas
    // const result = Conversor_1.default.ConvertCurrency(Number(amount), from.toString(), to.toString());
    // res.send(`The result is ${result}`);
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
