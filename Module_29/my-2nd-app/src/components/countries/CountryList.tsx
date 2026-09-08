import { use } from "react";
//import CountryCard from "./CountryCard";
import type { CountryType } from "../type";
import Country from "../country/country";
import "./CountryList.css";

export interface CountryListProps {
  countries: Promise<CountryType[]>;
}

export default function CountryList({ countries }: CountryListProps) {
  const countryNames = use(countries);
  console.log(countryNames);
  return (
    <div>
      <h2>Country List</h2>
      <div className="countryList">
        {countryNames.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
}
