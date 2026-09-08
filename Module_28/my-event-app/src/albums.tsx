import { useEffect, useState } from "react";

export default function Albums(){

    const [albums,setAlbums] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then (res=>res.json())
        .then(data=>{
            console.log(data);
            setAlbums(data);
        })
    },[])

    return (
        <div>
            <h2>
                Albums:{albums.length}
            </h2>
        </div>
    )
}