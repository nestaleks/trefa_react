import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Header from "./components/header/header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/footer";

import About from "./pages/about/About";
import Support from "./pages/support/Support";
import Contacts from "./pages/contacts/Contacts";

import ScrollToTop from "./utils/scrollToTop";




function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header/>
        <Routes>
          <Route path="/" exact component={Home}/>
          <Route path="/about" element={<About/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;