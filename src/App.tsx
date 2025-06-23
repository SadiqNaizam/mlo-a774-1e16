import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import IndexPage from './pages/Index';

/**
 * The root component of the application.
 * It sets up the theme provider to enable light/dark mode toggling
 * and configures the main application router.
 */
const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;