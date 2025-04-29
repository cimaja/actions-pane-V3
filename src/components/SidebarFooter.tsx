import React from 'react';
import { TemplatesModal } from './TemplatesModal';
import LibraryModal from './LibraryModal';
import styles from './SidebarFooter.module.css';

interface SidebarFooterProps {
  isTemplatesOpen: boolean;
  isLibraryOpen: boolean;
  libraryInitialCategory: string | null;
  onOpenTemplates: () => void;
  onOpenLibrary: () => void;
  onCloseTemplates: () => void;
  onCloseLibrary: () => void;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({
  isTemplatesOpen,
  isLibraryOpen,
  libraryInitialCategory,
  onOpenTemplates,
  onOpenLibrary,
  onCloseTemplates,
  onCloseLibrary,
}) => (
  <div className={styles.footerContainer}>
    <div className="overflow-hidden">
      <button
        className={styles.footerButton}
        onClick={onOpenTemplates}
      >
        {/* Templates Icon */}
        <svg className={styles.footerButtonIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="7" x="3" y="3" rx="1"></rect><rect width="9" height="7" x="3" y="14" rx="1"></rect><rect width="5" height="7" x="16" y="14" rx="1"></rect></svg>
        <span className={styles.footerButtonLabel}>Templates</span>
      </button>
      <button
        className={styles.footerButton}
        onClick={onOpenLibrary}
      >
        {/* Library Icon */}
        <svg className={styles.footerButtonIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path><path d="M12 3v6"></path></svg>
        <span className={styles.footerButtonLabel}>Library</span>
      </button>
    </div>
    <TemplatesModal isOpen={isTemplatesOpen} onClose={onCloseTemplates} />
    <LibraryModal isOpen={isLibraryOpen} onClose={onCloseLibrary} initialCategory={libraryInitialCategory} />
  </div>
);

export default SidebarFooter;
