import "./App.css";

function App() {
  return (
    <>
      <h1>React</h1>
      {/* <Person></Person>
      <Gagets></Gagets> */}
      <Student></Student>
      <Student></Student>
      <Student></Student>
    </>
  );
}

// function Person() {
//     return <p>I am here</p>
// }

// function Gagets(){
//   let name = "Payel"
//   return (
//     <>
//     <p>I am sraboni. My age is {25-2}</p>
//     <p>I am sraboni</p>
//     <p>I am not sraboni. I am {name}</p>
//     <p>I am sraboni</p>
//     <p>I am sraboni</p>
//     </>
//   )
// }

function Student(){
  return(
    <div className="Student">
    <h3>Name:</h3>
    <p>Grade</p>
  </div>
  )
}


export default App;
