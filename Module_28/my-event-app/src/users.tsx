// 1. data source || json
// json.stringify()
// json.parse()

//.json

// // 2. data fetching || api call using callback pattern
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// // 2. data fetching || api call using async await pattern
// //normal function
// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   return data;
// }

// //arrow function
// const loadData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   return data;
// };

export default Users;

function Users(){
    return(
        <div>
            <h2>User:</h2>
        </div>
    )
}
