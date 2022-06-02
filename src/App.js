import "./App.css";
import Home from "./Components/Header/Home";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";



const App = () => {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

       
      </Routes>
    </>
  );
};

export default App;
