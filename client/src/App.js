// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Navbar from "./components/navbar/Navbar";
// import PageContainer from "./x-libs/containers/PageContainer";
import { useAuthMapRoutes } from "./router/Router";
function App() {
  const mainRoutes = useAuthMapRoutes();
  return <div className="App">{mainRoutes}</div>;
}

export default App;
