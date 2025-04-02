import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../header/Header";
import Register from "../user/Register";

const App = () => {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Register/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
