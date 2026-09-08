import  { use } from "react"
import CountryCard from "../CountryCard/CountryCard";
import type { CountryType } from "./type";

export interface CountryListProps {
    countries: Promise<CountryType[]>
}

export default function CountryList({ countries }: CountryListProps) {
    const countryNames = use(countries);
    console.log(countryNames)
    return(
        <div>
            <h2>Country List</h2>
            {/* {
                countryNames.map(country=><CountryCard country={country}></CountryCard>)
            } */}
        </div>
    )
}


