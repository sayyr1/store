import React from "./snowpack/pkg/react.js";
import BlogsCard from "./BlogCard.js";
function App() {
  const blogArray = [
    {
      id: 1,
      title: "Sayri",
      content: "Espero que estes bien"
    },
    {
      id: 2,
      title: "Sayri",
      content: "Espero que estes bien"
    },
    {
      id: 3,
      title: "Sayri",
      content: "Espero que estes bien"
    },
    {
      id: 4,
      title: "Sayri",
      content: "Espero que estes bien"
    },
    {
      id: 5,
      title: "Esperanza",
      content: "Espero que estes bien"
    }
  ];
  const displayArrayContent = blogArray.map((item, pos) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "shadow-md items-center w-80",
      key: item.id
    }, /* @__PURE__ */ React.createElement("h2", {
      className: "text-center"
    }, item.title), /* @__PURE__ */ React.createElement("p", {
      className: "text-center"
    }, item.content));
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid justify-center items-center text-center"
  }, displayArrayContent, /* @__PURE__ */ React.createElement(BlogsCard, null));
}
export default App;
