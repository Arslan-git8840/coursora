'use client';
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { Button } from "../ui/button";

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
      <div className="lg:hidden fixed top-4 left-4 z-40">
        <Button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 rounded-md bg-black text-white"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "h-screen bg-white flex flex-col border-r border-gray-200 transition-all duration-300",
          isCollapsed ? "w-16" : "w-64",
          isMobileSidebarOpen
            ? "fixed left-0 top-0 z-30 w-64"
            : "fixed -left-full lg:left-0 top-0 z-30",
          "lg:relative"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!isCollapsed && (
            <h2 className="font-semibold text-black truncate">Course Chapters</h2>
          )}
          <Button
            onClick={toggleSidebar}
            className="p-1 rounded-md bg-gray-100 hover:bg-gray-200 text-black lg:flex hidden"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
          <Button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="lg:hidden p-1 ml-auto rounded-md hover:bg-gray-200 text-black"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

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
                    "w-full text-left flex items-center py-2 px-3 rounded-md transition-colors duration-200 relative bg-gray-100",
                    activeChapter === chapter.id
                      ? "bg-black text-white"
                      : "text-black hover:bg-gray-100 hover:text-black"
                  )}
                >
                  <span className="w-5 h-5 flex items-center justify-center mr-3 rounded-full font-medium text-xs">
                    {idx + 1}
                  </span>
                  {!isCollapsed && (
                    <span className="truncate">{chapter?.chapterContent?.title}</span>
                  )}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          {!isCollapsed && (
            <div className="text-xs text-gray-500">
              <p>AI Course Generator Platform</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile sidebar backdrop */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
