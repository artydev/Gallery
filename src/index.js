import "./styles.css";
import m from "mithril";
import Json from "json5";
import { Header } from "./Header";
import { Gallerie } from "./Gallerie";
import { data } from "../static/list";

function App() {
  let comp = {
    view: () => [m(Header), m(Gallerie)]
  };
  return comp;
}

console.log(Json.parse);
m.mount(document.getElementById("app"), App);
