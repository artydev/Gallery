import m from "mithril";
import b from "bss";

let modalOpen = true

b.css(".modal", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.3)"

})

b.css(".modal-content", {

})

export function closeModal() {
  modalOpen = false
}

export function isOpen () {
  return modalOpen
}

export function isClosed () {
  return !modalOpen
}


export function Modal() {
  let comp = {
    view() {
      return  m("div.modal", 
        m("div.modal-content",
          m("", {onclick: () => modalOpen = true}, "Modal")));
    }
  };
  return comp;
}
