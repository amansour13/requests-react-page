import Sidebar from './components/sidebar.jsx';
import MainContent from './components/MainContent.jsx';
import { useState } from 'react';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Requests from './pages/requests.jsx';
import './App.css';

function App() {

  const [activePage, setActivePage] = useState("orders");
  return (
    <>
      <BrowserRouter>
            <Routes>
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              {/* <Route path="/requests" element={<Requests />} /> */}
              {/* <Route path="/clients" element={<Clients />} /> */}
              <Route path="/requests" element={<Requests />} />
              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
