// Version: 1.0

function Validador(BRLamount1: number, USDprice1: number) {
    //verificador se não está invalido os dados
    if (undefined === (BRLamount1) || undefined === (USDprice1)) {
        return 1;
    }
    return 0;
}
function ConvertCurrency(BRLamount: number, USDprice: number) {
    const USD = 1;
 
  
    return ((USD * BRLamount) / USDprice);
}

export default {
    ConvertCurrency,
    Validador
}