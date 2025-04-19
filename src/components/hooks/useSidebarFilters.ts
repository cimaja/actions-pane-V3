/**
 * useSidebarFilters.ts
 *
 * Contains custom hooks for filtering modules by favorites, search query, and tag for the Sidebar.
 */
import { useMemo } from 'react';

export function useFavoritesFilter(modules: any[], favoriteActions: Set<string>, getActionId: (moduleId: string, subIdx: number, idx: number) => string) {
  return useMemo(() => {
    // Only include modules/submodules/actions that are favorited
    return modules
      .map((module, mIdx) => {
        const filteredSubmodules = module.submodules
          .map((submodule: any, subIdx: number) => {
            const filteredActions = submodule.actions.filter((_: string, idx: number) =>
              favoriteActions.has(getActionId(module.id || mIdx, subIdx, idx))
            );
            if (filteredActions.length === 0) return null;
            return { ...submodule, actions: filteredActions };
          })
          .filter(Boolean);
        if (filteredSubmodules.length === 0) return null;
        return { ...module, submodules: filteredSubmodules };
      })
      .filter(Boolean);
  }, [modules, favoriteActions, getActionId]);
}

export function useSearchAndTagFilter(modules: any[], query: string, selectedTag: string) {
  const lowerQuery = query.trim().toLowerCase();
  return useMemo(() => {
    return modules
      .filter(module => {
        if (selectedTag !== 'All' && selectedTag !== 'Favorites' && !(module.tags && module.tags.includes(selectedTag))) return false;
        if (selectedTag === 'built-in' && !(module.tags && module.tags.includes('built-in'))) return false;
        // Search filter
        if (!lowerQuery) return true;
        if (module.name.toLowerCase().includes(lowerQuery)) return true;
        if (module.submodules.some((sub: any) => sub.name && sub.name.toLowerCase().includes(lowerQuery))) return true;
        if (module.submodules.some((sub: any) => sub.actions.some((a: string) => a.toLowerCase().includes(lowerQuery)))) return true;
        return false;
      });
  }, [modules, lowerQuery, selectedTag]);
}
