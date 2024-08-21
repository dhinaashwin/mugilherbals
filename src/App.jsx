import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Hero from './Components/Hero/Hero';
import HomePage from './Pages/HomePage';
import { AppProvider } from './Context/AppContext';

function App() {
  return (
    <AppProvider>
    <Router>
      <Navbar />
      <Routes>
           <Route path="/" element = {<HomePage/>}/>

      </Routes>
    </Router>
    </AppProvider>
  );
}

export default App;
