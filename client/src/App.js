import axios from "axios";
import { useAuthMapRoutes } from "./router/Router";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => {
      console.log(res);
    });
  }, []);

  const mainRoutes = useAuthMapRoutes();
  return <div className="App">{mainRoutes}</div>;
}

export default App;
