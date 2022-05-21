import {useEffect, useState} from "react";

const App = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch("http://localhost:3001/cities")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
               console.error('Error fetching data', error);

            });
    }, []);

    return (
    <div className="container-fluid">
        <div className="row">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <div className="d-flex"></div>
                        <table>
                            <thead>
                            <tr className="col-9">
                                <th>Code insee</th>
                                <th>City</th>
                                <th>Population</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data && (data.map( (city) => (
                                <tr key={city.id}>
                                    <td>
                                        {city.insee}
                                    </td>
                                    <td>
                                        {city.name}
                                    </td>
                                    <td>
                                        {city.population}
                                    </td>
                                </tr>
                            )))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default App;
