import PropTypes from "prop-types";
import "./style.scss";

function SortSummary({ sortBy, onRadioChange }) {
  const handleRadioChange = (value) => {
    onRadioChange(value);
  };

  return (
    <div className="radio-list">
      <h2 className="sort-title">Sort By:</h2>
      <div className="radio-item">
        <label htmlFor="">Total Confirmed Cases</label>
        <input
          onChange={() => handleRadioChange("TotalConfirmed")}
          checked={sortBy === "TotalConfirmed"}
          type="radio"
        />
      </div>
      <div className="radio-item">
        <label htmlFor="">Highest Number Of Deaths</label>
        <input
          onChange={() => handleRadioChange("TotalDeaths")}
          checked={sortBy === "TotalDeaths"}
          type="radio"
        />
      </div>
      <div className="radio-item">
        <label htmlFor="">least number of recovered cases</label>
        <input
          onChange={() => handleRadioChange("TotalRecovered")}
          checked={sortBy === "TotalRecovered"}
          type="radio"
        />
      </div>
    </div>
  );
}

SortSummary.defaultProps = {
  onRadioChange: () => undefined,
};

SortSummary.propTypes = {
  sortBy: PropTypes.string,
  onRadioChange: PropTypes.func,
};

export default SortSummary;
