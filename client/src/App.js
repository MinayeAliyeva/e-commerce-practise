import { useAuthMapRoutes } from "./router/Router";
import { MainContext } from "./store/context";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const mainRoutes = useAuthMapRoutes();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/users").then((response) => {
      setUsers(response?.data);
    });
  }, []);

  return (
    <MainContext.Provider value={users}>
      <div className="App">{mainRoutes}</div>
    </MainContext.Provider>
  );
}

export default App;
