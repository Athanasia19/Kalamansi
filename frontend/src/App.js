import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Plant from "./Components/Plant/plant";

import Quality from "./Components/Predict/Quality";
import Disease from "./Components/Predict/Disease";
import QualityList from "./Components/Predict/QualityList";
import DiseaseResult from "./Components/Predict/Result/DiseaseResult";
import QualityResult from "./Components/Predict/Result/QualityResult";

import Planting from "./Components/Plant/Guide/Planting";
import Cure from "./Components/Plant/Guide/Cure";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import About from "./Components/About";
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
          <Route path="/predict/quality" element={<Quality exact="true" />} />
          <Route path="/predict/disease" element={<Disease exact="true" />} />
          <Route path="/quality/all" element={<QualityList exact="true" />} />
          <Route path="/quality/result" element={<QualityResult exact="true" />} />
          <Route path="/disease/result" element={<DiseaseResult exact="true" />} />
          <Route path="/guide/planting" element={<Planting exact="true" />} />
          <Route path="/guide/disease" element={<Cure exact="true" />} />
          <Route path="/login" element={<Login exact="true" />} />
          <Route path="/about" element={<About exact="true" />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
