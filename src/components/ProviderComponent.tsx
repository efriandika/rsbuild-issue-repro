import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import './ProviderComponent.css';

const Provider: React.FC = () => {
  return (
    <div className="container">
      <div className="icon-container">
        <img
          src="https://module-federation.io/svg.svg"
          alt="logo"
          className="logo-image"
        />
      </div>
      <h1 className="title">Hello Module Federation 2.0</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>XXXXXXX</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Provider;
