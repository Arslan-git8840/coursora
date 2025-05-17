'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const Sidebar = ({
  chapters,
  activeChapter,
  setActiveChapter,
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      {/* Mobile Menu Button */}
      {!isMobileSidebarOpen && (
        <div className="lg:hidden fixed top-4 left-4 z-40">
          <Button
            onClick={() => setIsMobileSidebarOpen(true)}
            className="p-2 rounded-md bg-white text-black"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Sidebar Panel */}
      <div
        className={cn(
          'bg-white flex flex-col border-r border-gray-200 h-full z-50 transition-all duration-300',
          isCollapsed ? 'w-16' : 'w-64',
          isMobileSidebarOpen
            ? 'fixed top-0 left-0 h-full shadow-lg'
            : 'lg:relative lg:translate-x-0 fixed -left-full lg:left-0'
        )}
      >
        {/* Top Section */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!isCollapsed && <h2 className="font-semibold text-black truncate">Course Chapters</h2>}

          {/* Collapse Toggle (Desktop Only) */}
          <div className="hidden lg:block">
            <Button
              onClick={toggleSidebar}
              className="p-1 rounded-md bg-gray-100 hover:bg-gray-200 text-black"
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          </div>

          {/* Close Button (Mobile Only) */}
          <div className="lg:hidden ml-auto">
            <Button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="p-1 rounded-md bg-gray-100 hover:bg-gray-200 text-black"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Chapters List */}
        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="space-y-1 px-2">
            {chapters.map((chapter, idx) => (
              <li key={chapter.id}>
                <Button
                  onClick={() => {
                    setActiveChapter(chapter.id);
                    if (window.innerWidth < 1024) {
                      setIsMobileSidebarOpen(false);
                    }
                  }}
                  className={cn(
                    'w-full text-left flex items-center py-2 px-3 rounded-md transition-colors duration-200',
                    activeChapter === chapter.id
                      ? 'bg-black text-white'
                      : 'bg-[#f5deb3] text-black hover:bg-[#f7daa5]'
                  )}
                >
                  <span className="w-5 h-5 flex items-center mr-3 font-medium text-xs">
                    {idx + 1}
                  </span>
                  {!isCollapsed && (
                    <span className="truncate">
                      {chapter?.chapterContent?.title || 'Untitled'}
                    </span>
                  )}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          {!isCollapsed && (
            <div className="text-xs text-gray-500">
              <p>AI Course Generator Platform</p>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop for Mobile Sidebar */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
