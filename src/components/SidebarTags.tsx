/**
 * SidebarTags.tsx
 *
 * This component renders the tag and favorites filter pills for the Sidebar. It allows users
 * to filter actions by tag or show only favorites, and reports the selected tag to the parent.
 */
import React from 'react';

interface SidebarTagsProps {
  tags: string[];
  selectedTag: string;
  onSelectTag: (tag: string) => void;
  showFavorites?: boolean;
}

const SidebarTags: React.FC<SidebarTagsProps> = ({ tags, selectedTag, onSelectTag, showFavorites = true }) => (
  <div style={{ padding: 8, borderBottom: '1px solid #eee', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
    {tags.map(tag => (
      <button
        key={tag}
        style={{
          padding: '4px 10px',
          borderRadius: 12,
          border: 'none',
          background: selectedTag === tag ? '#0078d4' : '#f4f4f4',
          color: selectedTag === tag ? '#fff' : '#333',
          fontWeight: selectedTag === tag ? 600 : 400,
          cursor: 'pointer',
          fontSize: 13,
        }}
        onClick={() => onSelectTag(tag)}
      >
        {tag}
      </button>
    ))}
    {showFavorites && (
      <button
        key="Favorites"
        style={{
          padding: '4px 10px',
          borderRadius: 12,
          border: 'none',
          background: selectedTag === 'Favorites' ? '#f7c948' : '#f4f4f4',
          color: selectedTag === 'Favorites' ? '#222' : '#333',
          fontWeight: selectedTag === 'Favorites' ? 600 : 400,
          cursor: 'pointer',
          fontSize: 13,
          marginLeft: 8,
        }}
        onClick={() => onSelectTag('Favorites')}
      >
        ★ Favorites
      </button>
    )}
  </div>
);

export default SidebarTags;
