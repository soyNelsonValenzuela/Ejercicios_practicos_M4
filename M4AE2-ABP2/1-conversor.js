// Problema 1
function convertUsdToClp(usd) {
    if (typeof usd !== 'number') {
        return "El valor debe ser un número";
    }else{
    const tasaCambio = 745;
    return Math.round(usd * tasaCambio);
    }
};
console.log(convertUsdToClp(31.10)); 