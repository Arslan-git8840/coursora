'use client';
import { useState } from "react";
import Sidebar from "@/components/course-view/SIdeBar";
import ChapterContent from "@/components/course-view/ChapterContent";
import { Button } from "../ui/button";

const CourseView = ({ chapterList }) => {
  const [activeChapter, setActiveChapter] = useState(chapterList[0].id);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  // Find the current chapter
  const currentChapter = chapterList.find(chapter => chapter.id === activeChapter);
  
  if (!currentChapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        chapters={chapterList} 
        activeChapter={activeChapter} 
        setActiveChapter={setActiveChapter}
        isMobileSidebarOpen={isMobileSidebarOpen}
        setIsMobileSidebarOpen={setIsMobileSidebarOpen}
      />
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Course Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#ff7f50]">{chapterList[0].topic}</h1>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-course-blue-100 text-course-blue-800 rounded-full text-sm font-medium">
                  Chapter {activeChapter} of {chapterList.length}
                </span>
              </div>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-course-blue-500 rounded-full" 
                style={{width: `${(activeChapter / chapterList.length) * 100}%`}}
              />
            </div>
          </div>
          
          {/* Chapter Content */}
          <ChapterContent chapter={currentChapter} />
          
          {/* Navigation */}
          <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4">
            <Button
              onClick={() => setActiveChapter(prev => Math.max(prev - 1, chapterList.length))}
              disabled={activeChapter === chapterList[0].id}
              className="px-4 py-2 flex items-center justify-center gap-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Chapter
            </Button>
            
            <Button
              onClick={() => setActiveChapter(prev => Math.min(prev + 1, chapterList.length))}
              disabled={activeChapter === chapterList.length}
              className="px-4 py-2 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next Chapter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
