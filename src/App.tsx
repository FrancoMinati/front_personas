import "./App.css";
import { Routes, Route } from "react-router";
import { AllRoutes } from "./routes/routes";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="flex flex-col  bg-neutral-100 w-full">
      <Header />
      <Routes>
        {AllRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
