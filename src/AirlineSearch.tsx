import airlines from "./scripts/airlines";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import AirlinesList from "./AirlinesList";

function AirlineSearch() {
  const [, setAirline] = useSearchParams();
  const [firstAirport, setFirstAirport] = useState("");
  const [secondAirport, setSecondAirport] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (firstAirport !== secondAirport) {
      setAirline({ airportA: firstAirport, airportB: secondAirport });
    }
  };

  return (
    <div className="main">
      <div className="searchAirport">
        <form className="box" onSubmit={handleSubmit}>
          <div className="formElements">
            <p>Plan your airplane trip</p>
            <div className="formElement">
              <p>From:</p>
              <div className="selection">
                <select
                  required={true}
                  value={firstAirport}
                  onChange={(event) => setFirstAirport(event.target.value)}
                >
                  <option value="">Please choose an airport</option>
                  {airlines.airports.map((airport) => (
                    <option key={airport} value={airport}>
                      {airport}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="formElement">
              <p>To:</p>
              <div>
                <select
                  required={true}
                  value={secondAirport}
                  onChange={(event) => setSecondAirport(event.target.value)}
                >
                  <option value="">Please choose an airport</option>
                  {airlines.airports.map((airport) => (
                    <option key={airport} value={airport}>
                      {airport}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button type="submit">plan route</button>
          </div>
        </form>
      </div>
      <AirlinesList />
    </div>
  );
}

export default AirlineSearch;
