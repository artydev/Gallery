import m from "mithril";
import b from "bss";

// In order to not display modal at startapp,
// it's assumed the modal is already opened
// eventhough it's not displayed,
// so we put it in 'closing' state
let closingModal = true;

b.css(".modal", {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "black"
});

b.css(".modal-content", {
  background: "black",
  position: "relative",
  display: "flex",
  top: "5%",
  width: "90%",
  height: "90%",
  justifyContent: "center"
});

b.css(".close", {
  position: "absolute",
  right: "10px",
  top: "5px",
  fontWeight: "bold",
  cursor: "pointer",
  color: "white"
});

b.css(".img", {
  marginTop: "0 !important",
  height: "100%"
});

function closeModal() {
  closingModal = true;
}

export function resetModal() {
  closingModal = false;
}

export function isClosingModal() {
  return closingModal;
}

export function Modal() {
  let comp = {
    view({ attrs: { photo } }) {
      return (
        !closingModal &&
        m(
          "div.modal",
          m(
            "div.modal-content",
            m("div.close", { onclick: closeModal }, "X"),
            m("img.img", { alt: photo, src: `${photo}` })
          )
        )
      );
    }
  };
  return comp;
}
