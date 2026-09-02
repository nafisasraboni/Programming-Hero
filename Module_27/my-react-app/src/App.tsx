import "./App.css";

function App() {
  return (
    <>
      <h1>Get started, Already</h1>
      <Person></Person>
      <Gagets></Gagets>
    </>
  );
}

function Person() {
    return <p>I am here</p>
}

function Gagets(){
  let name = "Payel"
  return (
    <>
    <p>I am sraboni. My age is {25-2}</p>
    <p>I am sraboni</p>
    <p>I am not sraboni. I am {name}</p>
    <p>I am sraboni</p>
    <p>I am sraboni</p>
    </>
  )
}



export default App;
