import axios from "axios";

export const getSummary = () => axios.get('https://api.covid19api.com/summary')

export const getCountry = (code) => axios.get(`https://restcountries.com/v2/alpha/${code}`);