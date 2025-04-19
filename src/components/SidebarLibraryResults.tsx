/**
 * SidebarLibraryResults.tsx
 *
 * This component renders the list of non-installed (library) modules for the Sidebar search.
 * It displays only the module names for both built-in and connector results.
 */
import React from 'react';

interface SidebarLibraryResultsProps {
  builtInLibraryResults: React.ReactNode[];
  connectorLibraryResults: React.ReactNode[];
  show: boolean;
  totalLibraryCount?: number;
}

const SidebarLibraryResults: React.FC<SidebarLibraryResultsProps> = ({ builtInLibraryResults, connectorLibraryResults, show, totalLibraryCount = 0 }) => {
  if (!show) return null;
  
  return (
    <>
      <div style={{ textAlign: 'left', margin: '16px 0', color: '#888', fontSize: 14, paddingLeft: 8 }}>
        {totalLibraryCount === 0 ? 'No results found in the Library' : 'Showing results from the library'}
      </div>
      {totalLibraryCount > 0 && (
        <>
          {builtInLibraryResults}
          {connectorLibraryResults}
        </>
      )}
    </>
  );
};

export default SidebarLibraryResults;
