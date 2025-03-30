import ReactDOM from "react-dom/client"

import App from "./App"

ReactDOM.createRoot(
  document.getElementById("root") ?? document.createElement("<div></div>")
).render(<App />)
