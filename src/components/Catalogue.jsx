import "./Catalogue.css";
import catalogueData from "../data/data.json";

export default function Catalogue() {
  return (
    <main>
      <span>{catalogueData.results.length} películas</span>
      <section>
        {catalogueData.results.map((movie) => (
          <article key={movie.id}>
            <div className="movieInfo">
              <span className="movieText">
                <h4>{movie.original_title}</h4>
                <h5>{movie.title}</h5>
              </span>
              <div className="voteAverage">{movie.vote_average}</div>
            </div>
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div className="movieSummary">
              <h4 className="highlighted">{movie.original_title}</h4>
              <p>{movie.overview}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
