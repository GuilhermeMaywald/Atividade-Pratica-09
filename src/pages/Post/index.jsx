import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function Post () {
    const {id} = useParams();
    const [data, setData] = useEffect({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            if(!response.ok) {
                throw new Error('Api Error')
            }
            return response.json();
        })
        .then(posts => {
            setTimeout(() => {
                setData(posts);
                setIsLoading(false);
            }, 2000);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <div>
                <Link to="/posts">Voltar</Link>
            </div>
            {isLoading ? (
                <strong>Carregando dados...</strong>
            ) : (
                <div>
                    <div>
                        <strong>id: </strong>
                        <span>{data.id}</span>
                    </div>
                    <div>
                        <strong>{data.title}</strong>
                        <p>{data.body}</p>
                    </div>
                </div>
            )}
        </div>
    )
}