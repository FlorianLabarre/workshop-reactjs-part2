import { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";

function Countries() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(
            (result) => {
                console.log(result.data);
                setData(result.data);
            }
        );
    }, []);
    return (
        <div className="countries">
            COUNTRIES
            <ul>
                {data.map((current) => {
                    return (
                        <li key={current.cca2}><Card {...current}/></li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Countries;