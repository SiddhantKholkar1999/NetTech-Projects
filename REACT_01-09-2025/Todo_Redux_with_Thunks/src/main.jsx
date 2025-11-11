import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import { ownStore } from "./Redux/Store.js";

import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={ownStore}>
    <App />
  </Provider>
);
