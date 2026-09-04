import "./App.css";

function App() {
  // function handleClick() {
  //   alert("Button clicked");
  // }

  const handleClick = ()=>{
    alert("Click me before I run,Hehe!!");
  }

  const handleAddToCart=(id)=>{
    alert("Buy this "+ id)
  }

  return (
    <>
      {/* <button onClick={handleClick}>Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={()=>{
        alert("click quickly!!")
      }}>Click me 2</button>

      <button onClick={() =>handleAddToCart(65)}>Click me 3</button>
    </>
  );
}

export default App;
