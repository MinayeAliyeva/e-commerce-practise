import axios from "axios";
import { useAuthMapRoutes } from "./router/Router";
import { useState, useEffect } from "react";

function App() {

  const mainRoutes = useAuthMapRoutes();
  return <div className="App">{mainRoutes}</div>;
}

export default App;
