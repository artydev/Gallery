//https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
import "./styles.css";
import m from "mithril";
import { chunk } from "../utils/array";
import { baseUrl } from "../utils/config";
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
        source:
          "https://cnt-02.content-eu.drive.amazonaws.com/cdproxy/templink/E6lveOoEBR1lc6MG1tjiT_leSD22wbPwKUAaFhNuUh4eJxFPc?viewBox=1191%2C670&ownerId=A3HL1HIBP4ZCUF",
        //source: `${baseUrl}/${d.source}`,
        date: d.date,
        lieu: d.lieu,
        description: d.description
      })
    );
  }
}
