import * as React from 'react';
import '../Styles/style.css'
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import UseFetchCurrencies from '../Api/useFetchCurrencies';

export default function RightSideCurrencyBtn({ onClick }) {

    // Lay API currencies
    const [data] = UseFetchCurrencies();

    // Handling Click: Set click value to Global State (App)

    const handlingClickButton = (event) => {
        var value = event.target.value;
        onClick(value);
    }

    return (
        <>
            <Stack direction='row' className='CurrencyRow'>
                {data && data.map(
                    (currency, index) => {
                        return (
                            <Button variant="text" className='button' key={'cur2' + index} value={currency}
                                onClick={handlingClickButton}>{currency}</Button>
                        )
                    }
                )}
            </Stack>
        </>
    )
}