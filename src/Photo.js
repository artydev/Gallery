import m from "mithril";
import b from "bss";
import { Modal, isClosed, closeModal } from "./Modal";


b.css(".desc", {
  marginBottom: "30px"
});

export function Photo() {
  
  let showModal = () => (closeModal());
  let comp = {
    view: ({ attrs: { lieu, source, date, description } }) => [
      m("img", { onclick: showModal, src: source, style: "width:100%" }),
      m("div", `${lieu} le ${date}`),
      //showmodal && m("div.desc", description)
       isClosed() && m(Modal)
    ]
  };
  return comp;
}
