import m from "mithril";
import b from "bss";
import { Modal , resetModal } from "./Modal";

b.css("img", {
  cursor: "pointer"
})

b.css(".desc", {
  marginBottom: "30px"
});

export function Photo() {
  let comp = {
    view: ({ attrs: { lieu, source, date } }) => {
      return [
        m("img", { onclick: resetModal, src: source, style: "width:100%" }),
        m("div", `${lieu} le ${date}`),
        m(Modal)
      ];
    }
  };
  return comp;
}
