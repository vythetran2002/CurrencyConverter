import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../Styles/style.css'



export default function FromAmountMoney({ onChange, data }) {

    // Filter any string to only number string
    function filterNumbersFromString(str) {
        const matches = str.match(/[0-9]/g);
        if (matches) {
            return matches.join('');
        }
        return '';
    }

    const HandlingChange = (e) => {
        var value = e.target.value;
        onChange(filterNumbersFromString(value));
    }

    return (
        <div>
            <TextField id="textField34" label="" variant="filled" color='primary' fullWidth
                onChange={HandlingChange}
                value={data} />
        </div>
    )
}