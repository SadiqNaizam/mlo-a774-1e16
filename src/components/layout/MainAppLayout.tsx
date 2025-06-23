import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-background">
      {/* Sidebar fixed to the left, spanning both rows */}
      <Sidebar />
      
      {/* Header fixed to the top of the second column */}
      <Header />
      
      {/* Main content area, scrollable, with padding to align content */}
      <main className="overflow-y-auto px-8 py-6">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
