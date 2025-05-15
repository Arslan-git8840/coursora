'use client';
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import CourseCard from "@/components/all-courses/courseCard";
import { useState } from "react";
import Link from "next/link";


const AllCourses = ({ courses }) => {
  const [username] = useState("John"); // In a real app, this would come from authentication
  // const [courses] = useState(sampleCourses);

  const handleCreateCourse = () => {
    console.log("Create new course clicked");
    // In a real app, this would open a form or navigate to a course creation page
  };

  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Hello, <span className="text-primary">{username}</span>
        </h1>
        <p className="text-xl text-gray-600">
          Manage your AI-generated courses
        </p>
      </header>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Your Courses</h2>
        <Link href={'/create-course'}>
          <Button
            onClick={handleCreateCourse}
            className="bg-blue-600 hover:bg-blue-600/90 flex items-center gap-2"
          >
            <PlusIcon size={16} />
            Create Course
          </Button>
        </Link>
      </div>

      {courses.length === 0 ? (
        <div className="bg-muted/50 rounded-lg p-12 text-center">
          <h3 className="text-xl font-medium mb-4">No courses yet</h3>
          <p className="text-muted-foreground mb-6">
            Create your first AI-generated course to get started
          </p>
          <Button
            onClick={handleCreateCourse}
            className="bg-primary hover:bg-primary/90"
          >
            Create Your First Course
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCourses;
