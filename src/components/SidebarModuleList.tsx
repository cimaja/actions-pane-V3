/**
 * SidebarModuleList.tsx
 *
 * This component renders the list of installed (local) modules and their actions in the Sidebar.
 * It supports expand/collapse, favorites toggling, and filtering by tag.
 */
/**
 * SidebarModuleList.tsx
 *
 * This component renders the list of installed (local) modules and their actions in the Sidebar.
 * It supports expand/collapse, favorites toggling, and filtering by tag.
 */
import React from 'react';
import { useFavoritesFilter, useSearchAndTagFilter } from './hooks/useSidebarFilters';
import styles from './SidebarModuleList.module.css';

interface Module {
  name: string;
  tags?: string[];
  submodules: { name?: string; actions: string[] }[];
}
interface Category {
  name: string;
  modules: Module[];
}
interface Source {
  name: string;
  categories: Category[];
}

interface SidebarModuleListProps {
  actionSources: Source[];
  expandedModules: Record<string, boolean>;
  onToggleModule: (moduleId: string) => void;
  favoriteActions: Set<string>;
  toggleFavorite: (actionId: string) => void;
  selectedTag: string;
  getActionId: (moduleId: string, subIdx: number, idx: number) => string;
  searchQuery?: string; // Optionally pass search query for filtering
}

const SidebarModuleList: React.FC<SidebarModuleListProps> = ({
  actionSources,
  expandedModules,
  onToggleModule,
  favoriteActions,
  toggleFavorite,
  selectedTag,
  getActionId,
  searchQuery = '',
}) => {
  // Flatten all modules from sources
  const allModules = actionSources
    .filter(source => source.name === 'PAD Action' || source.name === 'Connector')
    .flatMap(source =>
      source.categories.flatMap(category =>
        category.modules.map(module => ({
          ...module,
          id: `${source.name}|${category.name}|${module.name}`,
          _source: source,
          _category: category,
        }))
      )
    );

  // Filter modules based on selectedTag and searchQuery, or favorites
  let filteredModules: any[] = [];
  if (selectedTag === 'Favorites') {
    filteredModules = useFavoritesFilter(allModules, favoriteActions, getActionId);
  } else {
    filteredModules = useSearchAndTagFilter(allModules, searchQuery, selectedTag);
  }

  return (
    <>
      {filteredModules.map(module => {
        const moduleId = module.id;
        const expanded = expandedModules[moduleId];
        return (
          <div key={moduleId} className={styles.moduleGroup}>
            <div
              className={styles.moduleHeader}
              onClick={() => onToggleModule(moduleId)}
            >
              {module.name}
              <span className={styles.moduleArrow} aria-label={expanded ? 'Collapse' : 'Expand'}>
                {expanded ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 6L8 9.5L11.5 6" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4.5L9.5 8L6 11.5" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>
            </div>
            {expanded && (
              <div>
                {module.submodules.map((submodule: any, subIdx: number) => (
                  <div key={subIdx} className={styles.submoduleWrapper}>
                    {submodule.name && (
                      <div className={styles.submoduleName}>{submodule.name}</div>
                    )}
                    <ul className={styles.actionList}>
                      {submodule.actions.map((actionName: string, idx: number) => {
                        const actionId = getActionId(moduleId, subIdx, idx);
                        const isFav = favoriteActions.has(actionId);
                        return (
                          <li
                            key={actionName + idx}
                            className={styles.actionItem}
                          >
                            <div className={styles.actionName}>{actionName}</div>
                            <span
                              className={isFav ? `${styles.favoriteIcon} ${styles.favoriteIconActive}` : `${styles.favoriteIcon} ${styles.favoriteIconInactive}`}
                              onClick={() => toggleFavorite(actionId)}
                              title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                            >
                              {isFav ? '★' : '☆'}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default SidebarModuleList;
