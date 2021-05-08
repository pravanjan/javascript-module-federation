import "@vaadin/vaadin-login/vaadin-login-overlay.js";

export var login = (element) => {
  if (document && element) {
    let loginElement = document.createElement("vaadin-login-form");
    element.appendChild(loginElement);
  } else {
    console.log("document or element  not found ");
  }
};
