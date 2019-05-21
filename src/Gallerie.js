//https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
import "./styles.css";
import m from "mithril";
import { chunk } from "../utils/array";
import { Photo } from "./Photo";
import { numphotos } from "../utils/config";
import { data } from "./api";

const data4 = chunk(data, numphotos);

export function Gallerie() {
  let comp = {
    view: () =>
      m("div.row", data4.map(chunk => m("div.column", displayChunk(chunk))))
  };
  return comp;

  function displayChunk(chunk) {
    return chunk.map(d =>
      m(Photo, {
        source: `${d.source}`,
        date: d.date,
        lieu: d.lieu,
        description: d.description,
        click: () => alert(`${d.source}`)
      })
    );
  }
}
