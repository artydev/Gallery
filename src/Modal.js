import m from "mithril";
import b from "bss";

// In order to not display modal at startapp,
// it's assumed the modal is already opened
// eventhough it's not displayed,
// so we put it in 'closing' status
let closingModal = true

b.css(".modal", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(255,255,255,0.83)"
})

b.css(".modal-content", {
  position: "relative",
  top: "50%",
  left: "50%",
  width: "90%",
  height: "90%",
  background: "rgba(5,90,0,0.53)",
  transform: "translate(-50%, -50%)"
})

b.css(".close", {
  cursor: "pointer"
})

function closeModal () {
  closingModal = true
}

export function resetModal() {
  closingModal = false
}

export function Modal() {
  let comp = {
    view () {
      return !closingModal && m("div.modal", 
        m("div.modal-content",
          m("div.close", {onclick: closeModal}, "Modal")));
    }
  };
  return comp;
}

