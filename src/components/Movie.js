import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "../Movie.module.css";

function Movie({id, coverImg, title, summary, genres}){
    return( 
    <div style={styles} className={styles.movieContent}>
        <img src={coverImg} alt={title} />
        <p>{summary.length > 400? summary.slice(0, 400) + "...(More)" : summary}</p>
        <h2>
            <Link className={styles.title} to={`/movie/${id}`}>{title}</Link>
        </h2>
        <div className={styles.genreUl}>
            {genres.map((g) => (
            <div className={styles.genreLi} key={g}>{g}</div>
            ))}
        </div>
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;