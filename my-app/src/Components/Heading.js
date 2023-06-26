import { React, ReactDOM } from "react";
import '../Styles/style.css'

//Return name of the currencies
function convertCurrencyAbbreviations(input) {
    const currencyMappings = {
        SGD: "Singapore Dollar",
        MYR: "Malaysian Ringgit",
        EUR: "Euro",
        USD: "US Dollar",
        AUD: "Australian Dollar",
        JPY: "Japanese Yen",
        CNH: "Chinese Yuan",
        HKD: "Hong Kong Dollar",
        CAD: "Canadian Dollar",
        INR: "Indian Rupee",
        DKK: "Danish Krone",
        GBP: "British Pound",
        RUB: "Russian Ruble",
        NZD: "New Zealand Dollar",
        MXN: "Mexican Peso",
        IDR: "Indonesian Rupiah",
        TWD: "Taiwan Dollar",
        THB: "Thai Baht",
        VND: "Vietnamese Dong"
    };

    const abbreviations = Object.keys(currencyMappings);
    const regex = new RegExp(abbreviations.join("|"), "gi");

    return input.replace(regex, match => currencyMappings[match.toUpperCase()] || match);
}

export default function Heading({ moneyAmount, currency1, currency2 }) {

    const FilteredMoneyAmount1 = convertCurrencyAbbreviations(moneyAmount);
    const FilteredCurrency1 = convertCurrencyAbbreviations(currency1);
    const FilteredCurrency2 = convertCurrencyAbbreviations(currency2);

    return (
        <>
            <div className="slogan-container">
                <p className="slogan">OANDA CURRENCY CONVERTER</p>
            </div>
            <div>
                <p className="content">{FilteredMoneyAmount1} {FilteredCurrency1} to {FilteredCurrency2}</p>
            </div>
        </>
    )
}