import { useSearchParams } from "react-router-dom";
import airlines from "./scripts/airlines";

function AirlinesList() {
  const [airline] = useSearchParams();
  const airportA = airline.get("airportA");
  const airportB = airline.get("airportB");
  const shortestPath =
    airportA && airportB ? airlines.findAirline(airportA, airportB) : [];

  if (airportA && airportB && shortestPath) {
    return (
      <div className="searchAirport">
        <div className="airline">
          <p>The shortest flight connection:</p>
          <ul>
            {shortestPath.map((airline, index) => {
              if (shortestPath.length - 1 !== index) {
                return (
                  <li key={airline}>
                    <div className="airport">{airline}</div>
                    <div>
                      <hr />
                    </div>
                  </li>
                );
              }
              return (
                <li key={airline}>
                  <div className="airport">{airline}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else if (airportA && airportB) {
    return (
      <div className="searchAirport">
        <div className="airline">
          <p>Sorry - no connection found.</p>
        </div>
      </div>
    );
  }
  return <></>;
}

export default AirlinesList;
