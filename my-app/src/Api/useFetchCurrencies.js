import { useState, useEffect } from "react";
import axios from 'axios';

function UseFetchCurrencies() {
    const [list, setList] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/listquotes',
        headers: {
            'X-RapidAPI-Key': '7fe14ea8b6msh02eacce6c7def4fp11a6cbjsnf35a6de5635a',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.request(options);
            setList(response.data)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(
        () => {
            fetchData();
        }, []
    )

    return [list];
}

export default UseFetchCurrencies;