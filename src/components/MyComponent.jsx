import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function MyComponent () {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect( () => {
        setIsLoading(true);

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if(!response) {
                throw new Error('Api Error');
            }
            return response.json();
        })
        .then(posts => {
            setData(posts);
            setIsLoading(false);
        }, 2000) 
        .catch(error => {
            console.log(error);
        })

    }, [])

    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>

            {isLoading && <strong>Carregando Dados...</strong>}

            {data.map(post =>(
                <div key={post.id} className="container-post">
                    <Link to={`/posts/${post.id}`}>
                        <div>
                            <strong>id: </strong>
                            <span>{post.id}</span>
                        </div>
                        <div>
                            <strong>{post.title}</strong>
                            <p>{post.body}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default MyComponent