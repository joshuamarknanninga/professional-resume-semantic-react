// src/App.js
import React from 'react';
import AppRoutes from './routes';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
