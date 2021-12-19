import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./components/home";
import NewTest from "./components/newTest";
import Sent from "./components/sent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-test' element={<NewTest />} />
        <Route path='/sent' element={<Sent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
