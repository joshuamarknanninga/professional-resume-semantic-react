// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  const basename = process.env.NODE_ENV === 'production' ? '/portfolio' : '/';
  return (
    <ThemeProvider>
      <BrowserRouter basename={basename}>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
