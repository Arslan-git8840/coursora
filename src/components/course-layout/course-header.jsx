import { CourseDetails } from "@/data/courseData";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";


export default function CourseHeader({ course, startButton }) {
  return (
    <Card className="p-6 sm:mb-6 mb-4">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center capitalize">
            {course.topic}
            <svg
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </h1>
          <p className="mt-2 text-gray-600">
            {course.topicDescription}
          </p>
          <div className="mt-4 flex items-center">
            <svg
              className="h-5 w-5 mr-1 text-[#0080FF]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[#0080FF] capitalize">{course.category}</span>
          </div>
          {startButton === true && <Link href={`/course/${course.id}/start`}><Button className="mt-4 w-full bg-[#0080FF] hover:bg-[#0066cc] text-white py-2 px-4 rounded">Start Course</Button></Link>}
        </div>
        <div className="relative">
          <div className="bg-blue-900 rounded-lg overflow-hidden relative">
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              BEST COURSES
            </div>
            <div className="flex items-center justify-center h-48 p-6">
              <div className="text-center">
                <h2 className="text-white text-6xl font-bold">SQL</h2>
              </div>
            </div>
            <div className="absolute bottom-2 left-2 text-white text-xs">
              ⬜ class central
            </div>
            <svg
              className="absolute right-4 top-4 text-green-400 h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 20V8a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2z" />
              <path d="M2 10h20" />
              <path d="M6 2v4" />
              <path d="M18 2v4" />
            </svg>
            <svg
              className="absolute right-4 bottom-4 text-green-400 h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6" />
              <path d="M16 10H8" />
            </svg>
            <svg
              className="absolute left-10 top-10 text-green-400 h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v12" />
              <path d="M6 12h12" />
            </svg>
          </div>
        </div>
      </div>
    </Card>
  );
}
