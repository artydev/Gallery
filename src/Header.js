import "w3-css/w3.css";
import m from "mithril";
import "./styles.css";

export function Header() {
  let comp = {
    view() {
      return m("div.header", [
        m("h1", "Gallerie Photos"),
        m("p", "Italie 2019")
      ]);
    }
  };
  return comp;
}
