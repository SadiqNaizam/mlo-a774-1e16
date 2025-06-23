import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

const Header: React.FC = () => {
  return (
    // This wrapper provides the sticky positioning for the header within the grid layout.
    // A z-index ensures it stays above the scrolling content.
    // The TopHeader component from context handles its own height, background, and internal content.
    <header className="sticky top-0 z-10">
      <TopHeader />
    </header>
  );
};

export default Header;
