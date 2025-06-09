console.log("Currency Converter");

let conversionRate = 0;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Enter Currency : ', (currencyVal) => {
    console.log(`Given Currency : ${currencyVal}`);
    console.log(`Local Currency : INR`);
    
    currencyConversion(currencyVal.toUpperCase());
    readline.close();
});

function currencyConversion(currencyVal) {
    switch (currencyVal) {
        case "AUD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "AED":
            console.log("UAE Dirham");
            conversionRate = 23.3243;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "ALL":
            console.log("Albanian Lek");
            conversionRate = 23.3243;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "AMD":
            console.log("Armenian Dram");
            conversionRate = 0.223273;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "ANG":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "AOA":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "ARS":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "AWG":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "AZN":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "BAM":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "BBD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "BDT":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "BGN":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "BHD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "BMD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "BND":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "BOB":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "BRL":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "BSD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "BTN":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "BWP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "BZD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "CAD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "CHF":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "CLP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "CNY":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "COP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "CRC":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "CVE":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "CZK":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "DJF":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "DKK":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "DOP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "DZD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "EUR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "EGP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "ETB":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "FJD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "FKP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "GBP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "GEL":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "GGP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "GHS":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "GIP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "GMD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "GNF":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "GTQ":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "GYD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "HKD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "HNL":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "HRK":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "HTG":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "HUF":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "INR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "IDR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "ILS":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "IMP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "ISK":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "JEP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "JMD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "JOD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "JPY":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "KES":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "KGS":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "KHR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "KMF":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "KRW":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "KWD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "KYD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "KZT":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "LAK":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "LBP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "LKR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "LRD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "LSL":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "MXN":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "MAD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "MDL":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "MGA":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "MKD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "MNT":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "MOP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "MRU":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "MUR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "MVR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "MWK":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "MYR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "MZN":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "NAD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "NGN":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "NIO":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "NOK":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "NPR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "NZD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "OMR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "PAB":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "PEN":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "PGK":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "PHP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "PKR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "PLN":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "PYG":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "QAR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "RON":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "RSD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "RWF":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "SAR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "SBD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "SCR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "SEK":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "SGD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "SHP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "SLL":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "SRD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "SVC":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "SZL":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "THB":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "TJS":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "TMT":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "TND":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "TOP":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "TRY":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "TTD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "TWD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "TZS":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "USD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "UAH":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "UGX":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "UYU":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "UZS":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "VND":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "VUV":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "WST":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "XCD":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "XOF":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "XPF":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "ZAR":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        case "ZMW":
            console.log("Australian Dollar");
            conversionRate = 55.9397;
            console.log("1", currencyVal, "=", conversionRate, "INR");
            break;
        default:
            console.log("NOT A TRAFFIC LIGHT COLOR");
    }
}





