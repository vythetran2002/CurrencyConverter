import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../Styles/style.css'
import UseFetchExchange from '../Api/useFetchExchange';
import { useEffect } from 'react';


// Calculating Exchanges
function convertCurrency(moneyAmount, fromCurrency, toCurrency, rates) {
    if (fromCurrency === toCurrency) {
        return moneyAmount;
    }

    if (!(fromCurrency in rates) || !(toCurrency in rates)) {
        return null;
    }

    var fromRate = rates[fromCurrency];
    var toRate = rates[toCurrency];

    var convertedAmount = moneyAmount * (toRate / fromRate);
    return convertedAmount;
}


export default function ToAmountMoney({ firstCur, secondCur, currentMoney, currDate }) {

    const [url, setUrl] = React.useState(`https://openexchangerates.org/api/historical/${currDate}.json?app_id=01341f5261444649a612793df73c7130`);
    const [result, setResult] = React.useState(0)
    var data = UseFetchExchange(url);


    const ExchangeMoney = () => {
        const rates = data.rates;
        const moneyUnit = convertCurrency(currentMoney, firstCur, secondCur, rates);
        return moneyUnit;
    }


    useEffect(
        () => {
            setUrl(`https://openexchangerates.org/api/historical/${currDate}.json?app_id=01341f5261444649a612793df73c7130`);
            if (data) {
                var temp = ExchangeMoney();
                setResult(Math.round(temp));
            }
        }, [data, firstCur, secondCur, currentMoney, currDate]
    );


    return (
        <>
            <TextField
                id="textField34"
                label=""
                variant="filled"
                color="primary"
                value={result || "Loading (May be we haven't have the current currency's rate yet. Please choose the previous day)"}
                fullWidth
            />
        </>
    )
}