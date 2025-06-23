import React from 'react';

// Layout Component
import MainAppLayout from '../components/layout/MainAppLayout';

// Dashboard Organism Components
import PageHeader from '../components/Dashboard/PageHeader';
import FunnelCard from '../components/Dashboard/FunnelCard';
import SourcesCard from '../components/Dashboard/SourcesCard';
import TrackingCard from '../components/Dashboard/TrackingCard';
import ReasonsLostCard from '../components/Dashboard/ReasonsLostCard';
import OtherDataCard from '../components/Dashboard/OtherDataCard';

/**
 * Renders the main Leads Dashboard page.
 * This component orchestrates the overall layout by composing various dashboard
 * widgets within the MainAppLayout. It defines the responsive grid structure
 * for the dashboard cards based on the project's layout requirements.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* Page-specific header with tabs and filters */}
      <PageHeader />

      {/* Main dashboard grid. Layout matches the [2fr, 1fr] structure from requirements. */}
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr] lg:items-start">
        
        {/* Left column containing the main chart and smaller data cards */}
        <div className="flex flex-col gap-6">
          <TrackingCard />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ReasonsLostCard />
            <OtherDataCard />
          </div>
        </div>

        {/* Right column for supplementary charts and data */}
        <div className="flex flex-col gap-6">
          <FunnelCard />
          <SourcesCard />
        </div>

      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
