// Version: 1.0
    function ConvertCurrency(BRLamount: number, USDprice: number) {
        const USD = 1;
        console.log(BRLamount + USDprice)
        return ((USD * BRLamount) / USDprice);
    }
export default {
    ConvertCurrency
}