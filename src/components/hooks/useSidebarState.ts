import { useState } from 'react';

export function useSidebarState() {
  const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [libraryInitialCategory, setLibraryInitialCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLibraryResults, setShowLibraryResults] = useState(false);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [favoriteActions, setFavoriteActions] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

  return {
    isTemplatesOpen, setIsTemplatesOpen,
    isLibraryOpen, setIsLibraryOpen,
    libraryInitialCategory, setLibraryInitialCategory,
    searchQuery, setSearchQuery,
    showLibraryResults, setShowLibraryResults,
    expandedModules, setExpandedModules,
    selectedTag, setSelectedTag,
    favoriteActions, setFavoriteActions,
    loading, setLoading,
  };
}
