import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

const Sidebar: React.FC = () => {
  return (
    // This wrapper sets the width for the grid layout and ensures it spans both the header and main content rows.
    // The border provides a visual separation.
    // The SidebarNav component itself handles its background color and internal layout.
    <aside className="w-64 row-span-2 border-r bg-sidebar">
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
