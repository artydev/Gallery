import m from "mithril";
import b from "bss";

// In order to not display modal at startapp,
// it's assumed the modal is already opened
// eventhough it's not displayed,
// so we put it in 'closing' state
let closingModal = true;

b.css(".modal", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(255,255,255,0.83)"
});

b.css(".modal-content", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  position: "relative",
  top: "50%",
  left: "50%",
  width: "100%",
  height: "100%",
  background: "rgba(5,90,0,0.53)",
  transform: "translate(-50%, -50%)"
});

b.css(".close", {
  position: "absolute",
  cursor: "pointer",
  top: 0,
  left: "50%"
});

b.css(".img", {
  width: "100%",
  height: "auto"
});

function closeModal() {
  closingModal = true;
}

export function resetModal() {
  closingModal = false;
}

export function Modal() {
  let comp = {
    view({ attrs: { photo } }) {
      return (
        !closingModal &&
        m(
          "div.modal",
          m("div.modal-content", [
            m("div.close", { onclick: closeModal }, "Modal"),
            m("div", m("img.img", { src: photo }))
          ])
        )
      );
    }
  };
  return comp;
}
