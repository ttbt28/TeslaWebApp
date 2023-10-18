// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the change from Route to Routes
import Authentication from './Authentication';
import ControlCenter from './ControlCenter'; // Import the ControlCenter component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} /> {/* Use "element" instead of "component" */}
        <Route path="/control-center" element={<ControlCenter />} /> {/* Use "element" instead of "component" */}
      </Routes>
    </Router>
  );
}

export default App;
