import "./App.css";

function App() {
  return (
    <>
      <h1>React</h1>
      {/* <Person></Person>
      <Gagets></Gagets> */}
      {/* <Student></Student>
      <Student></Student>
      <Student></Student> */}
      <Foodname></Foodname>
      <Mathio></Mathio>
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

// function Student(){

//   // const studentStyle = {
//   //   border:'2px solid red',
//   //   borderRadius:'10px',
//   //   margin:'10px'
//   // }

//   return(
//     <div style={{
//     border:'2px solid red',
//     borderRadius:'10px',
//     margin:'10px'
//   }}>
//     <h3>Name:</h3>
//     <p>Grade</p>
//   </div>
//   )
// }



//practice

function Mathio(){
  const name="Moon"
  return(
    <>
    <p>this is {name}</p>
    <p>this is {name}'s age : {35-10+1}</p>
    
    </>
  )
}

function Foodname(){
  // const stylingFood={
  //   border: '2px solid black',
  //   borderRadius: '5px',
  //   margin: '10px'
  // }
  return(
    <div style={{
    border: '2px solid black',
    borderRadius: '5px',
    margin: '10px'
  }}>
      <h2>Pasta</h2>
      <h2>Pizza</h2>
      <h2>Pulao</h2>
      <h2>Biriyani</h2>
    </div>
  )
}

export default App;
