import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const interbankRates = ['+/-0%', '+/-1%', '+/-2% (Typical ATM rate)',
    '+/-3%(Typical Credit Card rate)', '+/-4%', '+/-5%(Typical Kiosk rate)']

export default function MultiSelect() {

    const [rate, setRate] = React.useState('+/-0%');

    const handleChange = (event) => {
        setRate(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    defaultValue='0'
                    value={rate}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {interbankRates.map((rate, index) => {
                        return (
                            <MenuItem value={rate} key={index}>{rate}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </div>
    )
}
