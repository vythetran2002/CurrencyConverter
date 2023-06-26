import { useState, useEffect } from "react";
import axios from 'axios';

const UseFetchExchange = (url) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [url]);

    return data;
}

export default UseFetchExchange;
