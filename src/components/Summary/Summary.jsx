import PropTypes from "prop-types";
import "./style.scss";

function Summary({ summaryList, onCountryClick }) {
  return (
    <div className="summaries">
      <table>
        <thead>
          <tr>
            <th className="sticky">Country</th>
            <th>New Confirmed</th>
            <th>New Deaths</th>
            <th>New Recovered</th>
            <th>Total Confirmed</th>
            <th>Total Deaths</th>
            <th>Total Recovered</th>
          </tr>
        </thead>
        <tbody>
          {summaryList.map((summary) => (
            <tr
              key={summary.Country}
              onClick={() => onCountryClick(summary.CountryCode)}
            >
              <td className="sticky">{summary.Country}</td>
              <td>{summary.NewConfirmed}</td>
              <td>{summary.NewDeaths}</td>
              <td>{summary.NewRecovered}</td>
              <td>{summary.TotalConfirmed}</td>
              <td>{summary.TotalDeaths}</td>
              <td>{summary.TotalRecovered}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Summary.defaultProps = {
  summaryList: [],
  onCountryClick: () => undefined,
};

Summary.propTypes = {
  summaryList: PropTypes.array,
  onCountryClick: PropTypes.func,
};

export default Summary;
