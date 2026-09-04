export default Card;

function Card({title}: {title:string}) 
{ 
// title = 'New Title'; // This will throw an error because title is a prop and props are read-only in React. You cannot reassign a value to a prop.
return <h2>{title}</h2>; 
}
