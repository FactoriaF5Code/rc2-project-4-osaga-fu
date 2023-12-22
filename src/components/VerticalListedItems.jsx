import "./VerticalListedItems.css";
import catalogueData from "../data/data.json";

export default function VerticalListedItems() {
  const data = catalogueData.results;

  function orderedBy(data, field) {
    return [...data].sort((a, b) => a[field].localeCompare(b[field]));
  }

  return (
    <section className="verticalList">
      {orderedBy(data, "original_title").map((movie) => (
        <article key={movie.id} className="verticalArticle">
        <img
          className="verticalPoster"
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
