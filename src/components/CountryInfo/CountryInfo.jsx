import { UILoading } from "../UILoading";
import "./style.scss";

function CountryInfo({ onClose, dataCountry }) {

  return (
    <div className="wrapper" onClick={onClose}>
      {dataCountry ? (
        <div className="country-model" onClick={(e) => e.stopPropagation()}>
          <p className="country-flag">
            <img src={dataCountry.flag} alt={dataCountry.name} />{" "}
          </p>
          <p className="field">
            <span>Country</span>
            <span>{dataCountry.name}</span>
          </p>
          <p className="field">
            <span>Capital</span>
            <span>{dataCountry.capital}</span>
          </p>
          <p className="field">
            <span>Population</span>
            <span>{dataCountry.population}</span>
          </p>
          <p className="field">
            <span>Area</span>
            <span>{dataCountry.area}</span>
          </p>
          <p className="field">
            <span>Region</span>
            <span>{dataCountry.region}</span>
          </p>
          <p className="field">
            <span>Subregion</span>
            <span>{dataCountry.subregion}</span>
          </p>
          <p className="field">
            <span>Subregion</span>
            <span>{dataCountry.subregion}</span>
          </p>
          <div className="btn-close" onClick={onClose}></div>
        </div>
      ) : (
        <UILoading />
      )}
    </div>
  );
}

export default CountryInfo;
