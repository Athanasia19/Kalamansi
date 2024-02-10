import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Plant from "./Components/Plant/plant";
import Predict from "./Components/Predict/predict";
import Guide from "./Components/Plant/Guide/Tutorial";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import About from "./Components/Admin/About";
// import Register from './Components/User/register';
import Login from "./Components/User/login";
// import ProtectedRoute from "./Components/Route/ProtectedRoute";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact="true" />
          <Route path="/plant" element={<Plant exact="true" />} />
          <Route path="/predict" element={<Predict exact="true" />} />
          <Route path="/guide" element={<Guide exact="true" />} />
          <Route path="/login" element={<Login exact="true" />} />

          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
