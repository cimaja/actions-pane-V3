import React, { useState } from 'react';
import { Bug } from 'lucide-react';
import { ResetConnectors } from './ResetConnectors';
import { cn } from '../lib/utils';
import LibraryModal from './LibraryModal';
import { TemplatesModal } from './TemplatesModal';

export const LadybugNotification: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDebugLibraryOpen, setIsDebugLibraryOpen] = useState(false);
  const [isDebugTemplatesOpen, setIsDebugTemplatesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'core' | 'connectors' | 'custom-actions' | 'ui-collections'>('connectors');

  const togglePane = () => {
    setIsOpen(!isOpen);
  };

  const toggleDebugLibrary = () => {
    setIsDebugLibraryOpen(!isDebugLibraryOpen);
  };

  const toggleDebugTemplates = () => {
    setIsDebugTemplatesOpen(!isDebugTemplatesOpen);
  };

  return (
    <>
      {/* Floating Ladybug Icon */}
      <div 
        className="fixed right-4 bottom-[54px] z-[9999] cursor-pointer"
        onClick={togglePane}
        style={{ pointerEvents: 'auto' }}
      >
        <div className="bg-red-500 hover:bg-red-600 transition-colors rounded-full p-3 shadow-lg">
          <Bug className="h-6 w-6 text-white" />
          {!isOpen && (
            <span className="absolute -top-1 -right-1 bg-yellow-400 rounded-full w-3 h-3"></span>
          )}
        </div>
      </div>

      {/* Notification Pane */}
      <div 
        className={cn(
          "fixed right-0 top-0 bottom-0 z-40 w-80 bg-white shadow-xl transition-transform duration-300 transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold flex items-center">
              <Bug className="h-5 w-5 mr-2 text-red-500" />
              Dev Tools
            </h2>
            <button 
              onClick={togglePane}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="mb-3 p-3 bg-white rounded-lg border border-gray-200">
            <h3 className="text-sm font-semibold mb-1 text-gray-800">Reset local storage</h3>
            <p className="text-xs text-gray-600 mb-1">Reset installed actions, favorites and recents</p>
            <ResetConnectors />
          </div>

          <div className="mb-3 p-3 bg-white rounded-lg border border-gray-200">
            <h3 className="text-sm font-semibold mb-1 text-gray-800">Debug Library View</h3>
            <p className="text-xs text-gray-600 mb-1">Open the library in debug mode</p>
            <button
              onClick={toggleDebugLibrary}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              {isDebugLibraryOpen ? 'Close Debug View' : 'Open Debug Library View'}
            </button>
          </div>

          <div className="mb-3 p-3 bg-white rounded-lg border border-gray-200">
            <h3 className="text-sm font-semibold mb-1 text-gray-800">Debug Templates View</h3>
            <p className="text-xs text-gray-600 mb-1">Open the templates modal in debug mode</p>
            <button
              onClick={toggleDebugTemplates}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              {isDebugTemplatesOpen ? 'Close Templates View' : 'Open Debug Templates View'}
            </button>
          </div>

          <div className="mb-3 p-3 bg-white rounded-lg border border-gray-200" data-component-name="LadybugNotification">
            <h3 className="text-sm font-semibold mb-1 text-gray-800">What's New</h3>
            <p className="text-xs text-gray-600 mb-1">Latest updates and improvements</p>
            <div data-component-name="LadybugNotification">
              {/* Version 1.0 - Current */}
              <div className="bg-white py-3 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-gray-800">Version 1.0</p>
                  <p className="text-xs text-gray-500">April 20, 2025</p>
                </div>
                <div className="mb-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <p className="text-sm font-medium text-gray-800">Sidebar Foundation</p>
                  </div>
                  <p className="text-xs text-gray-600 ml-4">Implemented core sidebar structure with module-based navigation and search functionality</p>
                </div>

                <div className="mb-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <p className="text-sm font-medium text-gray-800">Library Integration</p>
                  </div>
                  <p className="text-xs text-gray-600 ml-4">Direct navigation to module details from search results with consistent visual styling</p>
                </div>

                <div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <p className="text-sm font-medium text-gray-800">Favorites System</p>
                  </div>
                  <p className="text-xs text-gray-600 ml-4">Implemented star-based favorites with hover visibility for a cleaner interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay when pane is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-30"
          onClick={togglePane}
        />
      )}

      {/* Debug Library View */}
      {isDebugLibraryOpen && (
        <>
          {/* Fixed header with close button */}
          <div className="fixed top-0 left-0 right-0 z-[70] bg-white border-b shadow-md p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Debug Library View</h2>
            <div className="flex gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('core')}
                  className={`px-3 py-1 rounded ${activeTab === 'core' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100'}`}
                >
                  Core
                </button>
                <button
                  onClick={() => setActiveTab('connectors')}
                  className={`px-3 py-1 rounded ${activeTab === 'connectors' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100'}`}
                >
                  Connectors
                </button>
              </div>
              <button
                onClick={toggleDebugLibrary}
                className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 font-medium"
              >
                Close Debug View
              </button>
            </div>
          </div>
          
          {/* Main content with padding for the fixed header */}
          <div className="fixed inset-0 z-[60] bg-white overflow-auto pt-[72px]">
            <div className="p-4">
              {/* Render the LibraryModal content directly */}
              <LibraryModal 
                isOpen={true} 
                onClose={() => {}} 
                initialCategory={null}
                initialTab={activeTab}
              />
            </div>
          </div>
        </>
      )}

      {/* Debug Templates View */}
      {isDebugTemplatesOpen && (
        <>
          {/* Fixed header with close button */}
          <div className="fixed top-0 left-0 right-0 z-[70] bg-white border-b shadow-md p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Debug Templates View</h2>
            <div className="flex gap-4">
              <button
                onClick={toggleDebugTemplates}
                className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 font-medium"
              >
                Close Templates View
              </button>
            </div>
          </div>
          
          {/* Main content with padding for the fixed header */}
          <div className="fixed inset-0 z-[60] bg-white overflow-auto pt-[72px]">
            <div className="p-4">
              {/* Render the TemplatesModal content directly */}
              <TemplatesModal 
                isOpen={true} 
                onClose={() => {}} 
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LadybugNotification;
