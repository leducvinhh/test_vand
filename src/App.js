import { useEffect, useState } from "react";
import { getCountry, getSummary } from "./apis";
import { CountryInfo } from "./components/CountryInfo";
import { SortSummary } from "./components/SortSummary";
import { Summary } from "./components/Summary";
import { UILoading } from "./components/UILoading";

function App() {
  const [summaryList, setSummaryList] = useState();
  const [sortBy, setSortBy] = useState("TotalConfirmed");
  const [showPopup, setShowPopup] = useState(false);
  const [countryCode, setCountryCode] = useState();
  const [dataCountry, setDataCountry] = useState();

  const handleSummaryClick = (code) => {
    setCountryCode(code);
    setShowPopup(true);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getSummary();

        const summarySorted = data.Countries?.sort((a, b) => {
          return sortBy !== "TotalRecovered"
            ? b[sortBy] - a[sortBy]
            : a[sortBy] - b[sortBy];
        });

        setSummaryList(summarySorted);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [sortBy]);

  useEffect(() => {
    if (countryCode) {
      (async () => {
        try {
          const { data } = await getCountry(countryCode);

          setDataCountry(data);
        } catch (error) {
          console.log(error);
        }

      })();
    }
  }, [countryCode]);

  return (
    <div className="App">
      {showPopup && (
        <CountryInfo
          onClose={() => {
            setShowPopup(false);
            setDataCountry(null);
          }}
          dataCountry={dataCountry}
        />
      )}

      {summaryList ? (
        <div className="inner">
          <h2 className="title">Summary Of Covid 19 Situation</h2>
          <SortSummary
            sortBy={sortBy}
            onRadioChange={(value) => setSortBy(value)}
          />
          <Summary
            summaryList={summaryList}
            onCountryClick={handleSummaryClick}
          />
        </div>
      ) : (
        <UILoading />
      )}
    </div>
  );
}

export default App;
