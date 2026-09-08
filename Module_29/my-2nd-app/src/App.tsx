import { Suspense } from "react";
import "./App.css";
import CountryList from "./components/CountryList";
import type { CountryType } from "./components/type";

const countries = async (): Promise<CountryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
};

function App() {
  return (
    <>
      <div>
        <h2>World on the go.</h2>
      </div>
      <Suspense fallback={<p>Loading Countries...</p>}>
        <CountryList countries={countries()}></CountryList>
      </Suspense>
    </>
  );
}

export default App;
