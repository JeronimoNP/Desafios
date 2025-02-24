import { Request, Response } from "express";
const express = require('express');
import conversor from '../Conversor de Moedas/Converso';

const app = express();
app.use(express.json());
const port = 8000;

app.post('/convert', (req: Request, res: Response) => {
    // Obtém os valor da consulta
    const { BRLamount, USDprice } = req.body;
    //convertendo string para float
    const BRLamount1 = parseFloat(BRLamount);
    const USDprice1 = parseFloat(USDprice);
    console.log(BRLamount1, USDprice1);
    //verifica se os valores são válidos
    const info = conversor.Validador(BRLamount1, USDprice1);
    if (info === 1) {
        return res.status(400).json({
            mensagem: "Erro na requisição: BRLamount e USDprice devem ser números válidos\n exemplo de requisição: { BRLamount: 100, USDprice: 5.90 }"
        });
    }
    //envia os dados para a função
    const result = conversor.ConvertCurrency(BRLamount1, USDprice1);
    //retorna o resultado
    res.status(200).json({
        result: result + " Dólares"
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
