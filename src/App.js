import "./App.css";
// we have to manually import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./Components/NavbarComponent";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from "./Components/Store";
import Success from "./Components/Success";
import Cancel from "./Components/Cancel";
import CartProvider from "./Components/CartContext";

function App() {
  return (
    <>
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
    </>
  );
}

export default App;
/*
a) index property tells us that the path is home page or path is /
*/