import "./Catalogue.css";
import HorizontalList from "./HorizontalList";
import VerticalList from "./VerticalList";

export default function Catalogue() {
  return (
    <main>
      <HorizontalList listName="Nuestros estrenos" />
      <VerticalList listName="Orden alfabético" />
      <VerticalList listName="Mejor valoradas" />
      <VerticalList listName="Más vistas en España" />
    </main>
  );
}
