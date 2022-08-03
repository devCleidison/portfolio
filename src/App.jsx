import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
// import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
}

export default App;
