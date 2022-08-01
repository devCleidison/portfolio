import { Header } from "./components/Header";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
