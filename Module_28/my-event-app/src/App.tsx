import { Suspense } from "react";
import "./App.css";
import Counter from "./counter";
import CricketScore from "./cricketScore";
import LikeButton from "./fbLikeButton";
import ShoppingCart from "./ShoppingCart";
// import Users from "./users";
// import Post from "./post";
// import Todos from "./todos";
import Comment from "./comment";
import Albums from "./albums";

const promisee = async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();
  return data;
}

const dataCall = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const postData = async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  return data;
}

//step-1:create a promise
const todos = async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/todos')
  const data=await res.json();
  return data;
}

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
     <Albums></Albums>
     
     <Suspense fallback={<p>Loading comments...</p>}>
      <Comment promisee={promisee()}></Comment>
     </Suspense>

     




      {/* <Suspense fallback={<p>Loading...</p>}>
        <Users dataCall={dataCall()}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<p>"Loading poast data..."</p>}>
      <Post postData={postData()}></Post>
      </Suspense> */}

      {/* step 2 : create suspense */}
      {/* <Suspense fallback={<p>"Loading todos Data..."</p>}>
      <Todos todos={todos()} ></Todos>
      </Suspense> */}

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
