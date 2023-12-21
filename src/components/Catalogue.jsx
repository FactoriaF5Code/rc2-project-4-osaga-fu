import "./Catalogue.css";
import List from "./List";
import VerticalList from "./VerticalList"

export default function Catalogue() {
  return (
    <main>
      <List listName="Nuestros estrenos" />
      <VerticalList listName="Orden alfabético" />
    </main>
  );
}
