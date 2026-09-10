import { use, useState } from "react";
//import CountryCard from "./CountryCard";
import type { CountryType } from "../type";
import Country from "../country/country";
import "./CountryList.css";

export interface CountryListProps {
  countries: Promise<CountryType[]>;
}

export default function CountryList({ countries }: CountryListProps) {

  const [visitedCountries,setVisitedCountries]=useState<CountryListProps[]>([])

  const countryNames = use(countries);

  const handleVisitedCountries =(country:CountryListProps):void=>{
    const newVisitedCountries = [...visitedCountries,country]; 
    setVisitedCountries(newVisitedCountries);
  }
  console.log(countryNames);
  return (
    <div>
      <h2>Countries:{countryNames.length}</h2>
      <h4>Visited Countries : {visitedCountries.length}</h4>
      <div className="countryList">
        {countryNames.map((country) => (
          <Country key={country.ccn3.ccn3} 
          country={country}
          handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div>
    </div>
  );
}
