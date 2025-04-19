import React from 'react';
import { useActions } from '../hooks/useActions';
import SidebarSearch from './SidebarSearch';
import SidebarTags from './SidebarTags';
import SidebarModuleList from './SidebarModuleList';
import SidebarLibraryResults from './SidebarLibraryResults';
import SidebarFooter from './SidebarFooter';
import { useSidebarState } from './hooks/useSidebarState';
import styles from './Sidebar.module.css';

// Types
export interface ActionInfo {
  id: string;
  name: string;
}

export interface ActionGroup {
  id: string;
  name: string;
  actions: ActionInfo[];
}


const Sidebar: React.FC = () => {
  // All sidebar state managed in a custom hook
  const sidebar = useSidebarState();

  // Reset library results and trigger fake loading when search query changes
  React.useEffect(() => {
    sidebar.setShowLibraryResults(false);
    if (sidebar.searchQuery.trim() === '') {
      sidebar.setLoading(false);
      return;
    }
    sidebar.setLoading(true);
    const timeout = setTimeout(() => sidebar.setLoading(false), 2000 + Math.random() * 1000);
    return () => clearTimeout(timeout);
  }, [sidebar.searchQuery]);

  // Helper to get a unique action ID (moduleId + submoduleIdx + actionIdx)
  const getActionId = (moduleId: string, subIdx: number, actionIdx: number) => `${moduleId}|${subIdx}|${actionIdx}`;

  const toggleFavorite = (actionId: string) => {
    sidebar.setFavoriteActions((prev: Set<string>) => {
      const newSet = new Set(prev);
      if (newSet.has(actionId)) {
        newSet.delete(actionId);
      } else {
        newSet.add(actionId);
      }
      return newSet;
    });
  };

  // Get only installed action sources (local)
  const actionSources = useActions({ installedOnly: true });
  // Get all built-in actions (for library search)
  const allBuiltInSources = useActions({ installedOnly: false, sourceName: 'PAD Action' });
  // Get all connectors (for library search, non-installed)
  const allConnectorSources = useActions({ installedOnly: false, sourceName: 'Connector' });

  // Collect unique tags from all installed modules
  const tagSet = new Set<string>();
  actionSources.forEach(source => {
    source.categories.forEach(category => {
      category.modules.forEach(module => {
        if (module.tags) module.tags.forEach(tag => tagSet.add(tag));
      });
    });
  });
  // Ensure 'built-in' tag is present in tag pills
  const allTags = ['All', 'built-in', ...Array.from(tagSet).filter(tag => tag !== 'built-in').sort()];

  const handleToggleModule = (moduleId: string) => {
    sidebar.setExpandedModules(prev => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };

  return (
    <aside className={styles.sidebarContainer}>
      {/* Search Bar */}
      <SidebarSearch value={sidebar.searchQuery} onChange={sidebar.setSearchQuery} />

      {/* Tag Filter Row with Favorites */}
      <SidebarTags tags={allTags} selectedTag={sidebar.selectedTag} onSelectTag={sidebar.setSelectedTag} showFavorites={true} />

      {/* Main Content Area: Grouped Actions + Search */}
      <div className={styles.sidebarMain}>
        {/* SEARCH LOGIC */}
        {sidebar.searchQuery.trim() ? (
          <React.Fragment>
            {/* --- INSTALLED (LOCAL) SEARCH RESULTS --- */}
            {(() => {
              // Helper: filter installed modules/actions by searchQuery and tag/favorite
              const query = sidebar.searchQuery.trim().toLowerCase();
              const filterModule = (module: any) => {
                // Tag/favorites filter
                if (sidebar.selectedTag !== 'All' && sidebar.selectedTag !== 'Favorites' && !(module.tags && module.tags.includes(sidebar.selectedTag))) return false;
                if (sidebar.selectedTag === 'built-in' && !(module.tags && module.tags.includes('built-in'))) return false;
                // Search filter (module, submodule, action names)
                if (module.name.toLowerCase().includes(query)) return true;
                if (module.submodules.some((sub: any) => sub.name && sub.name.toLowerCase().includes(query))) return true;
                if (module.submodules.some((sub: any) => sub.actions.some((a: string) => a.toLowerCase().includes(query)))) return true;
                return false;
              };
              let localResultsCount = 0;
              const localResults = actionSources
                .filter(source => source.name === 'PAD Action' || source.name === 'Connector')
                .flatMap(source =>
                  source.categories.flatMap(category =>
                    category.modules.filter(filterModule).map(module => {
                      localResultsCount++;
                      const moduleId = `${source.name}|${category.name}|${module.name}`;
                      const expanded = sidebar.expandedModules[moduleId];
                      return (
                        <div key={moduleId} className={styles.moduleGroup}>
                          <div
                            className={styles.moduleHeader}
                            onClick={() => handleToggleModule(moduleId)}
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
                                      // Search filter for actions
                                      if (!actionName.toLowerCase().includes(query) && !module.name.toLowerCase().includes(query) && !(submodule.name && submodule.name.toLowerCase().includes(query))) return null;
                                      const actionId = getActionId(moduleId, subIdx, idx);
                                      const isFav = sidebar.favoriteActions.has(actionId);
                                      if (sidebar.selectedTag === 'Favorites' && !isFav) return null;
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
                    })
                  )
                );
              // --- LIBRARY SEARCH (NON-INSTALLED) ---
              // Built-in: show actions, Connectors: show only connector name
              // Get all built-in modules (PAD Action) that are not installed
              const installedModuleKeys = new Set(
                actionSources.filter(s => s.name === 'PAD Action').flatMap(s => s.categories.flatMap(c => c.modules.map(m => `${c.name}-${m.name}`)))
              );
              const builtInLibraryResults: any[] = [];
              let builtInLibraryCount = 0;
              allBuiltInSources.forEach(source => {
                source.categories.forEach(category => {
                  category.modules.forEach(module => {
                    const moduleKey = `${category.name}-${module.name}`;
                    if (installedModuleKeys.has(moduleKey)) return; // skip installed
                    // Tag filter
                    if (sidebar.selectedTag !== 'All' && sidebar.selectedTag !== 'Favorites' && !(module.tags && module.tags.includes(sidebar.selectedTag))) return;
                    if (sidebar.selectedTag === 'built-in' && !(module.tags && module.tags.includes('built-in'))) return;
                    // Search filter
                    if (module.name.toLowerCase().includes(query) ||
                        module.submodules.some((sub: any) => sub.name && sub.name.toLowerCase().includes(query)) ||
                        module.submodules.some((sub: any) => sub.actions.some((a: string) => a.toLowerCase().includes(query)))) {
                      builtInLibraryCount++;
                      builtInLibraryResults.push(
                        <div key={moduleKey} className={styles.libraryResult}>
                          <div 
                            className={styles.libraryResultName}
                            onClick={() => {
                              sidebar.setIsLibraryOpen(true);
                              // Pass the module name as initialCategory
                              sidebar.setLibraryInitialCategory(module.name);
                            }}
                          >
                            {module.name}
                            <span className={styles.libraryResultArrow}>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 3H13V11" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13 3L3 13" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                          </div>
                        </div>
                      );
                    }
                  });
                });
              });
              // Connectors: only show connector names (non-installed)
              const installedConnectorNames = new Set(
                actionSources.filter(s => s.name === 'Connector').flatMap(s => s.categories.flatMap(c => c.modules.map(m => m.name)))
              );
              const connectorLibraryResults: any[] = [];
              let connectorLibraryCount = 0;
              allConnectorSources.forEach(source => {
                source.categories.forEach(category => {
                  category.modules.forEach(module => {
                    if (installedConnectorNames.has(module.name)) return; // skip installed
                    // Tag filter
                    if (sidebar.selectedTag !== 'All' && sidebar.selectedTag !== 'Favorites' && !(module.tags && module.tags.includes(sidebar.selectedTag))) return;
                    if (sidebar.selectedTag === 'built-in') return; // built-in tag never matches connectors
                    // Search filter
                    if (module.name.toLowerCase().includes(query)) {
                      connectorLibraryCount++;
                      connectorLibraryResults.push(
                        <div key={module.name} className={styles.libraryResult}>
                          <div 
                            className={styles.libraryResultName}
                            onClick={() => {
                              sidebar.setIsLibraryOpen(true);
                              // Pass the module name as initialCategory
                              sidebar.setLibraryInitialCategory(module.name);
                            }}
                          >
                            {module.name}
                            <span className={styles.libraryResultArrow}>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 3H13V11" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13 3L3 13" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                          </div>
                        </div>
                      );
                    }
                  });
                });
              });
              const totalLibraryCount = builtInLibraryCount + connectorLibraryCount;
              return (
                <>
                  {/* Results area with loading state */}
                  {sidebar.loading ? (
                    <div className={styles.loadingState}>
                      <div className={styles.loadingSpinner}>
                        <svg width="32" height="32" viewBox="0 0 32 32">
                          <circle cx="16" cy="16" r="14" stroke="#0078d4" strokeWidth="4" fill="none" opacity="0.2" />
                          <circle cx="16" cy="16" r="14" stroke="#0078d4" strokeWidth="4" fill="none" strokeDasharray="80" strokeDashoffset="60">
                            <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
                          </circle>
                        </svg>
                      </div>
                      <div style={{ textAlign: 'center' }}>Loading results…</div>
                    </div>
                  ) : (
                    <>
                      {/* Local (installed) results */}
                      {localResults.length === 0 && <div className={styles.noResults}>No results found.</div>}
                      {/* Use SidebarModuleList for installed results */}
                      <SidebarModuleList
                        actionSources={actionSources}
                        expandedModules={sidebar.expandedModules}
                        onToggleModule={handleToggleModule}
                        favoriteActions={sidebar.favoriteActions}
                        toggleFavorite={toggleFavorite}
                        selectedTag={sidebar.selectedTag}
                        getActionId={getActionId}
                        searchQuery={sidebar.searchQuery}
                      />
                      {/* Library link or results */}
                      {(!sidebar.showLibraryResults && totalLibraryCount > 0) && (
                        <div className={styles.libraryLink}>
                          <button
                            className={styles.libraryLinkButton}
                            onClick={() => sidebar.setShowLibraryResults(true)}
                          >
                            {totalLibraryCount} more result{totalLibraryCount > 1 ? 's' : ''} in the Library
                          </button>
                        </div>
                      )}
                      {/* Use SidebarLibraryResults for library (non-installed) results */}
                      <SidebarLibraryResults
                        builtInLibraryResults={builtInLibraryResults}
                        connectorLibraryResults={connectorLibraryResults}
                        show={sidebar.showLibraryResults && totalLibraryCount > 0}
                      />
                    </>
                  )}
                </>
              );
            })()}
          </React.Fragment>
        ) : (
          // Default rendering for non-search (Favorites or All)
           sidebar.selectedTag === 'Favorites' ? (
            <React.Fragment>
              {actionSources
                .filter((source: any) => source.name === 'PAD Action' || source.name === 'Connector')
                .flatMap((source: any) =>
                  source.categories.flatMap((category: any) =>
                    category.modules.flatMap((module: any) => {
                      const moduleId = `${source.name}|${category.name}|${module.name}`;
                      const hasFav = module.submodules.some((submodule: any, subIdx: number) =>
                        submodule.actions.some((_: any, idx: number) => sidebar.favoriteActions.has(getActionId(moduleId, subIdx, idx)))
                      );
                      if (!hasFav) return null;
                      return (
                        <div key={moduleId} className={styles.moduleGroup}>
                          <div
                            className={styles.moduleHeader}
                            onClick={() => handleToggleModule(moduleId)}
                          >
                            {module.name}
                            <span className={styles.moduleArrow} aria-label={sidebar.expandedModules[moduleId] ? 'Collapse' : 'Expand'}>
                              {sidebar.expandedModules[moduleId] ? (
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
                          {sidebar.expandedModules[moduleId] && (
                            <div>
                              {module.submodules.length > 1
                                ? module.submodules.map((submodule: any, subIdx: number) => {
                                    const hasSubFav = submodule.actions.some((_: any, idx: number) => sidebar.favoriteActions.has(getActionId(moduleId, subIdx, idx)));
                                    if (!hasSubFav) return null;
                                    return (
                                      <div key={subIdx} className={styles.submoduleWrapper}>
                                        {submodule.name && (
                                          <div className={styles.submoduleName}>{submodule.name}</div>
                                        )}
                                        <ul className={styles.actionList}>
                                          {submodule.actions.map((actionName: string, idx: number) => {
                                            const actionId = getActionId(moduleId, subIdx, idx);
                                            const isFav = sidebar.favoriteActions.has(actionId);
                                            if (!isFav) return null;
                                            return (
                                              <li
                                                key={actionName + idx}
                                                style={{
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  justifyContent: 'space-between',
                                                  padding: '8px 0',
                                                  borderBottom: '1px solid #f3f3f3',
                                                }}
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
                                    );
                                  })
                                : module.submodules.map((submodule: any, subIdx: number) => (
                                    <ul key={subIdx} className={styles.actionList}>
                                      {submodule.actions.map((actionName: string, idx: number) => {
                                        const actionId = getActionId(moduleId, subIdx, idx);
                                        const isFav = sidebar.favoriteActions.has(actionId);
                                        if (!isFav) return null;
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
                                  ))}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )
                )}
            </React.Fragment>
          ) : (
            // Default rendering for All/Tags
            <React.Fragment>
              {/* Built-in section */}
              {actionSources
                .filter((source: any) => source.name === 'PAD Action')
                .flatMap((source: any) =>
                  source.categories.flatMap((category: any) =>
                    category.modules
                      .filter((module: any) => {
                        if (sidebar.selectedTag === 'All') return true;
                        if (sidebar.selectedTag === 'built-in') return module.tags && module.tags.includes('built-in');
                        return module.tags && module.tags.includes(sidebar.selectedTag);
                      })
                      .map((module: any) => {
                        const moduleId = `${source.name}|${category.name}|${module.name}`;
                        const expanded = sidebar.expandedModules[moduleId];
                        return (
                          <div key={moduleId} className={styles.moduleGroup}>
                            <div
                              className={styles.moduleHeader}
                              onClick={() => handleToggleModule(moduleId)}
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
                                        const isFav = sidebar.favoriteActions.has(actionId);
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
                      })
                  )
                )}
              {/* Connectors section for All/Tags */}
              {actionSources
                .filter((source: any) => source.name === 'Connector')
                .flatMap((source: any) =>
                  source.categories.flatMap((category: any) =>
                    category.modules
                      .filter((module: any) => {
                        if (sidebar.selectedTag === 'All') return true;
                        if (sidebar.selectedTag === 'built-in') return false;
                        return module.tags && module.tags.includes(sidebar.selectedTag);
                      })
                      .map((module: any) => {
                        const moduleId = `${source.name}|${category.name}|${module.name}`;
                        const expanded = sidebar.expandedModules[moduleId];
                        return (
                          <div key={moduleId} className={styles.moduleGroup}>
                            <div
                              className={styles.moduleHeader}
                              onClick={() => handleToggleModule(moduleId)}
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
                                {module.submodules && module.submodules.map((submodule: any, subIdx: number) => (
                                  <div key={subIdx} className={styles.submoduleWrapper}>
                                    {submodule.name && (
                                      <div className={styles.submoduleName}>{submodule.name}</div>
                                    )}
                                    <ul className={styles.actionList}>
                                      {submodule.actions && submodule.actions.map((actionName: string, idx: number) => {
                                        const actionId = getActionId(moduleId, subIdx, idx);
                                        const isFav = sidebar.favoriteActions.has(actionId);
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
                      })
                  )
                )}
            </React.Fragment>
          )
        )}
      </div>

      {/* Footer: Templates/Library buttons and modals */}
      <SidebarFooter
        isTemplatesOpen={sidebar.isTemplatesOpen}
        isLibraryOpen={sidebar.isLibraryOpen}
        libraryInitialCategory={sidebar.libraryInitialCategory}
        onOpenTemplates={() => sidebar.setIsTemplatesOpen(true)}
        onOpenLibrary={() => sidebar.setIsLibraryOpen(true)}
        onCloseTemplates={() => sidebar.setIsTemplatesOpen(false)}
        onCloseLibrary={() => {
          sidebar.setIsLibraryOpen(false);
          sidebar.setLibraryInitialCategory(null);
        }}
      />
    </aside>
  );
};

export default Sidebar;
