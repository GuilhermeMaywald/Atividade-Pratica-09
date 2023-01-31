import { useState, useEffect } from "react"
import Loading from "./Loading"

function MyComponent () {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            
            setTimeout(() => setIsLoading(false), 3000) 
        })
        .catch((error) => {
            setError(error);
            setIsLoading(true);
          });
        

    }, [])


    if (isLoading) {
        return <Loading />;
      }

    if (error) {
        return (
            <h4>Error {error}</h4>
        );
      }


    return (
        <div>
            <h1>My Component</h1>
            {data.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    )
}

export default MyComponent