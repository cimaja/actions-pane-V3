/**
 * SidebarSearch.tsx
 *
 * This component renders the search input for the Sidebar. It is responsible for capturing
 * and reporting the user's search query for filtering actions and modules in the Sidebar.
 */
import React from 'react';

interface SidebarSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const SidebarSearch: React.FC<SidebarSearchProps> = ({ value, onChange }) => (
  <div style={{ padding: 16, borderBottom: '1px solid #eee' }}>
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        placeholder="Search actions..."
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '8px 30px 8px 8px', 
          borderRadius: 4, 
          border: '1px solid #ccc', 
          outline: 'none', 
          fontSize: 15 
        }}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          style={{
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888',
            fontSize: '16px',
            width: '20px',
            height: '20px',
            lineHeight: 1
          }}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  </div>
);

export default SidebarSearch;
