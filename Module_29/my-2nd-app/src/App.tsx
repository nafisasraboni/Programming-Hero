import { Suspense } from 'react';
import './App.css'
import CountryList from './components/CountryList/CountryList';

const countries =async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/all')
  const data = await res.json();
  return data;
}

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading Countries...</p>}>
      <CountryList countries={countries()}></CountryList>
      </Suspense>
        <div>
          <h2>World on the go.</h2 >
        </div>
        
    </>
  )
}

export default App
