import "./App.css";
//import Todo from "./todo.tsx"
//import Task from "./task.tsx"
import Book from "./book.tsx";
import Footer from "./Footer.tsx";
import User from "./user.tsx";
import WelcomeCard from "./WelcomeCard.tsx";

function App() {
  const books = [
    "Feluda",
    "MisirAli",
    "Bomkesh Boksi",
    "Sharlok Homes",
    "Detective Konan",
  ];

  return (
    <>
      <h1>React</h1>

      {books.map((book) => (
        <Book name={book}></Book>
      ))}

      <User></User>
      <WelcomeCard></WelcomeCard>
      <Footer></Footer>


      {/* <Task task="Module Finish" isDone={true}></Task>
      <Task task="Phone charged" isDone={true}></Task>
      <Task task="Fb scrolling" isDone={false}></Task>
      <Todo task="Continue coding" time="2.00 PM"></Todo>
      <Todo task="Tale bath" time="12.00 PM"></Todo> */}
      {/* <Person></Person>
      <Gagets></Gagets> */}
      {/* <Student name="Jamila" grade="3.63"></Student>
      <Student name="Lamila" grade="3.73"></Student>
      <Student name="Kamila" grade="3.83"></Student> */}
      {/* <Foodname></Foodname>
      <Mathio></Mathio> */}
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

// function Student(props){
//   console.log(props)

//   // const studentStyle = {
//   //   border:'2px solid red',
//   //   borderRadius:'10px',
//   //   margin:'10px'
//   // }

//   return(
//     <div>
//     <h3>Name:{props.name}</h3>
//     <p>Grade:{props.grade}</p>
//   </div>
//   )
// }

//practice

// function Mathio(){
//   const name="Moon"
//   return(
//     <>
//     <p>this is {name}</p>
//     <p>this is {name}'s age : {35-10+1}</p>

//     </>
//   )
// }

// function Foodname(){
//   // const stylingFood={
//   //   border: '2px solid black',
//   //   borderRadius: '5px',
//   //   margin: '10px'
//   // }
//   return(
//     <div style={{
//     border: '2px solid black',
//     borderRadius: '5px',
//     margin: '10px'
//   }}>
//       <h2>Pasta</h2>
//       <h2>Pizza</h2>
//       <h2>Pulao</h2>
//       <h2>Biriyani</h2>
//     </div>
//   )
// }

export default App;
