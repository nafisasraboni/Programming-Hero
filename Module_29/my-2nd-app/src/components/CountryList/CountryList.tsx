import  { use } from "react"

export default function CountryList({countries}){
    const countryNames = use(countries);
    console.log(countryNames)
    return(
        <div>
            <h2>Country List</h2>
        </div>
    )
}