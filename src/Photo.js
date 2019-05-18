import m from "mithril";
export function Photo() {
  let comp = {
    view: ({ attrs: { lieu, source, date, description } }) => [
      m("img", { src: source, style: "width:100%" }),
      m("div", `${lieu} le ${date}`),
      m("pre", description)
    ]
  };
  return comp;
}
