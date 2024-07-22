// import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Dashboard from './pages/Dashboard';
import Header from './components/Header';

function App() {
  // const { userId } = useParams();

  return (
    // <>
    //   {userId}
    // </>
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/user/:userId" element={<Dashboard />} />
        <Route path="/*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  </div>
  );
}

export default App
