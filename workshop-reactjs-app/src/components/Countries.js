import { useEffect } from "react";

function Countries() {
    useEffect(() => {
        console.log("Hello React");
    }, []);

    return (
        <div className="countries">
            COUNTRIES
        </div>
    );
}

export default Countries;