import type { CountryType } from "../type"
import './country.css'

export interface CountryProps {
    country: CountryType
}

export default function Country({ country }: CountryProps) {
    
    return(
        <div className="country">
            <h4>Official : {country.name.official}</h4>
            <h5>Capital : {country.capital.capital}</h5>
            <h5>Population : {country.population.population}</h5>
            <h5>languages : {country.languages.languages.eng}</h5>
            <h5>languages : {country.languages.languages.jam}</h5>
            <h5>ccn3 : {country.ccn3.ccn3}</h5>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <button>Visited</button>
        </div>
    ) 
}