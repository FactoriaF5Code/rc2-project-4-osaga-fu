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
          <div className="movieInfo">
            <span className="movieText">
              <h4>{movie.original_title}</h4>
              <h5>{movie.title}</h5>
            </span>
            <div className="voteAverage">{movie.vote_average}</div>
          </div>
          <img
            className="verticalPoster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
        </article>
      ))}
    </section>
  );
}
