const airlines = {
  connections: [
    ["ATH", "EDI"],
    ["ATH", "GLA"],
    ["ATH", "CTA"],
    ["BFS", "CGN"],
    ["BFS", "LTN"],
    ["BFS", "CTA"],
    ["BTS", "STN"],
    ["BTS", "BLQ"],
    ["CRL", "BLQ"],
    ["CRL", "BSL"],
    ["CRL", "LTN"],
    ["DUB", "LCA"],
    ["LTN", "DUB"],
    ["LTN", "MAD"],
    ["LCA", "HAM"],
    ["EIN", "BUD"],
    ["EIN", "MAD"],
    ["HAM", "BRS"],
    ["KEF", "LPL"],
    ["KEF", "CGN"],
    ["SUF", "LIS"],
    ["SUF", "BUD"],
    ["SUF", "STN"],
    ["STN", "EIN"],
    ["STN", "HAM"],
    ["STN", "DUB"],
    ["STN", "KEF"],
  ],
  airports: [
    "ATH",
    "BSL",
    "BFS",
    "BLQ",
    "BTS",
    "BRS",
    "CRL",
    "BUD",
    "DUB",
    "EDI",
    "EIN",
    "GLA",
    "HAM",
    "CTA",
    "KEF",
    "CGN",
    "SUF",
    "LCA",
    "LPL",
    "LIS",
    "LTN",
    "STN",
    "MAD",
  ],
  findConnections:
    /**
     * returns all connections from selected airport
     * @param {string} airport - selected airport
     */
    function (airport: string) {
      const connectionsFound: { dest: string; line: string[] }[] = [];
      for (const connected of airlines.connections) {
        const [airport1, airport2] = connected;
        if (airport1 === airport) {
          connectionsFound.push({ dest: airport2, line: connected });
        } else if (airport2 === airport) {
          connectionsFound.push({ dest: airport1, line: connected });
        }
      }
      return connectionsFound;
    },
  findAirline:
    /**
     * search for shortest airline connection between passed airports or null if not found
     * @param {string} airportA - departure airport
     * @param {string} airportB - arrival airport
     */
    function (airportA: string, airportB: string) {
      var shortestPath: string[] = [];
      const directConnection = this.connections.filter(
        (connection) =>
          connection.includes(airportA) && connection.includes(airportB)
      );
      const result: string[][][] = [];
      const resultSorted = result.sort(
        (airline1, airline2) => airline1.length - airline2.length
      );
      if (directConnection.length !== 0) {
        return directConnection[0];
      }
      function findPath(airport: string, savedConnections: string[][]) {
        const airportConnections = airlines.findConnections(airport);
        for (const airportConnection of airportConnections) {
          if (airportConnection.dest === airportB) {
            result.push(savedConnections.concat([airportConnection.line]));
          } else if (!savedConnections.includes(airportConnection.line)) {
            findPath(
              airportConnection.dest,
              savedConnections.concat([airportConnection.line])
            );
          }
        }
      }
      findPath(airportA, []);
      if (resultSorted.length === 0) {
        return null;
      }
      shortestPath = Array.from(new Set(resultSorted[0].flat()));
      if (shortestPath[0] !== airportA) {
        const pathStart = shortestPath.slice(0, 2).reverse();
        shortestPath = pathStart.concat(shortestPath.slice(2));
      }
      if (shortestPath[shortestPath.length - 1] !== airportB) {
        const pathEnd = shortestPath.slice(-2).reverse();
        shortestPath = shortestPath
          .slice(0, shortestPath.length - 2)
          .concat(pathEnd);
      }
      return shortestPath;
    },
};

export default airlines;
