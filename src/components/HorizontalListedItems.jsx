import "./HorizontalListedItems.css";
import catalogueData from "../data/data.json";

export default function HorizontalListedItems() {
  const data = catalogueData.results;

  return (
    <section className="horizontalList">
      {data.map((movie) => (
        <article key={movie.id} className="horizontalArticle">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div className="movieSummary">
            <span className="headerSummary">
              <h4 className="highlighted">{movie.original_title}</h4>
              <h5>{movie.title}</h5>
              <h3 className="releaseDate">{movie.release_date}</h3>
              <div className="voteAverage">{movie.vote_average}</div>
            </span>
            <p>{movie.overview}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
