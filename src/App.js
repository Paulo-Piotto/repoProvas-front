import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./components/home";
import NewTest from "./components/newTest";
import Sent from "./components/sent";
import Search from "./components/search";
import ByTeacher from "./components/byTeacher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-test' element={<NewTest />} />
        <Route path='/sent' element={<Sent />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/teacher' element={<ByTeacher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
