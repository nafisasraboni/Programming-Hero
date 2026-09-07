import { Suspense } from "react";
import "./App.css";
import Counter from "./counter";
import CricketScore from "./cricketScore";
import LikeButton from "./fbLikeButton";
import ShoppingCart from "./ShoppingCart";
import Users from "./users";

const dataCall = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

function App() {
  // function handleClick() {
  //   alert("Button clicked");
  // }

  // const handleClick = ()=>{
  //   alert("Click me before I run,Hehe!!");
  // }

  // const handleAddToCart=(id)=>{
  //   alert("Buy this "+ id)
  // }

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Users dataCall={dataCall()}></Users>
      </Suspense>

      <CricketScore></CricketScore>
      <LikeButton></LikeButton>
      <Counter></Counter>
      <ShoppingCart></ShoppingCart>
      {/* <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick}>Click me</button>
      <button onClick={()=>{
        alert("click quickly!!")
      }}>Click me 2</button>

      <button onClick={() =>handleAddToCart(65)}>Click me 3</button> */}
    </>
  );
}

export default App;
