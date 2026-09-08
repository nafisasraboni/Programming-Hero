import type { CountryType } from "../type"
import './country.css'

export interface CountryProps {
    country: CountryType
}

export default function Country({ country }: CountryProps) {
    
    return(
        <div className="country">
            <h4>Official : {country.name.official}</h4>
            <h5>Population : {country.population.population}</h5>
        </div>
    ) 
}