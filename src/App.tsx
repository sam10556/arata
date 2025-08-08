import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./HomePage";
import ShoppingCartPage from "./components/ShoppingCart";

function App() {
  return (
    <Router>
      {/* Header appears on all pages */}
      <Header />

      {/* Page content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
