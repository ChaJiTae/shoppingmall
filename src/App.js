import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
// import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {}, [authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
