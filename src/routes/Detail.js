import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail(){
    const { id }= useParams();
    const [movie, setMovie] = useState(null);
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json().then((json) => {
            setMovie(json.data.movie)
            console.log(movie)
        })

    };
    useEffect(() => {
        getMovie();
    }, []);
    return(
        <div>
            <h1>Detail {id}</h1>
            {movie === null ? "<h2>Loading...<h2/>" : "<h1>Here</h1>"}
        </div>
    )
}

export default Detail;