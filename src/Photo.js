import m from "mithril";
import b from "bss";
import { Modal, resetModal } from "./Modal";

b.css("img", {
  cursor: "pointer"
});

b.css(".desc", {
  marginBottom: "30px"
});

export function Photo() {
  let clicked = false;
  let comp = {
    view: ({ attrs: { lieu, source, date } }) => {
      return [
        m("img#", {
          onclick: () => {
            resetModal();
            clicked = true;
            setTimeout(() => (clicked = false), 0);
          },
          src: source,
          style: "width:100%"
        }),
        m("div", `${lieu} le ${date}`),
        clicked && m(Modal, { photo: `${source}` })
      ];
    }
  };
  return comp;
}
