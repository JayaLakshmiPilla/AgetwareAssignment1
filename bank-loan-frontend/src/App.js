import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateLoan from './components/CreateLoan';
import MakePayment from './components/MakePayment';
import Ledger from './components/Ledger';
import Overview from './components/Overview';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="title">🏦 Bank Lending System</h1>
        <nav className="navbar">
          <Link to="/">Create Loan</Link>
          <Link to="/payment">Make Payment</Link>
          <Link to="/ledger">Loan Ledger</Link>
          <Link to="/overview">Customer Overview</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CreateLoan />} />
          <Route path="/payment" element={<MakePayment />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

