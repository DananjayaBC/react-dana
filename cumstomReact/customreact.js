function custoRender(reactElement, container) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   container.appendChild(domElement);
  const domEliment = document.createElement(reactElement.type);
  domEliment.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;

    domEliment.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domEliment);
}

const reactElement = {
  type: "a",
  props: {
    href: "httpsL//google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

custoRender(reactElement, mainContainer);
