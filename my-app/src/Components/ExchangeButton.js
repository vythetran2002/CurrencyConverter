import { React } from "react";
import { SvgIcon } from "@mui/material";

export default function ExchangeButton({ onClick, firstData, secondData }) {

    function HandlingClick() {
        const data01 = firstData;
        console.log('test00------' + data01);
        const data02 = secondData;
        console.log('test02------' + data02);
        onClick(data01, data02);
    }

    return (
        <span id='ExchangeIcon' onClick={HandlingClick}>
            <SvgIcon>
                <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
            </SvgIcon>
        </span>
    )
}