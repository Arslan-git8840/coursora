import VideoPlayer from "@/components/course-view/videoPlayer";
import { Clock, BookOpen } from "lucide-react";


const ChapterContent = ({ chapter }) => {
  console.log("videoId", chapter.videoId)
  return (
    <div className="space-y-6">
      {/* Video Player */}
      <div className="w-[100%] h-[320px]">
        <VideoPlayer videoId={chapter.videoId} />
      </div>

      {/* Chapter Info */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#ff7f50]">{chapter.chapterContent.title}</h1>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{chapter.duration}</span>
          </div>
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-700">{chapter.chapterContent.description}</p>
        </div>
      </div>

      {/* Code Example Section */}
      {chapter.chapterContent.CODEEXAMPLE && (
        <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
          <h3 className="font-medium text-white mb-3 flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Code Example
          </h3>
          <pre className="text-green-400 text-sm font-mono">
            {chapter.chapterContent.CODEEXAMPLE}
          </pre>
        </div>
      )}

      {/* Additional lesson content */}
      <div className="bg-course-blue-50 border border-course-blue-100 rounded-lg p-4">
        <h3 className="font-medium text-course-blue-800 mb-2">Chapter Notes</h3>
        <p className="text-course-blue-700">
          This is an interactive chapter covering {chapter.topic}.
          Watch the video to get started, then explore additional resources.
        </p>
      </div>

      {/* Resources & Downloads */}
      {/* <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="font-medium text-gray-900 mb-3">Resources & Downloads</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
            <a href="#" className="hover:underline">{chapter.topic} Slides (PDF)</a>
          </li>
          <li className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
            <a href="#" className="hover:underline">Exercise Files</a>
          </li>
          <li className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            <a href="#" className="hover:underline">Additional Reading</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default ChapterContent;
