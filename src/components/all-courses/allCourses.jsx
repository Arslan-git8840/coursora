'use client';
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import CourseCard from "@/components/all-courses/courseCard";
import { useState } from "react";
import Link from "next/link";

const AllCourses = ({ courses }) => {
  const [username] = useState("John");

  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-8">
      {/* Subheading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-primary tracking-tight sm:text-5xl mb-2">
          Coursora
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Your AI-powered platform to create, manage, and publish smart courses effortlessly.
        </p>
        <div className="h-1 w-16 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      {/* Welcome Message */}
      <header className="mb-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Hello, <span className="text-primary">{username}</span>
        </h2>
        <p className="text-xl text-gray-600">
          Manage your AI-generated courses
        </p>
      </header>

      {/* Action Bar */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-semibold">Your Courses</h3>
        <Link href={'/create-course'}>
          <Button
            className="bg-blue-600 hover:bg-blue-600/90 flex items-center gap-2"
          >
            <PlusIcon size={16} />
            Create Course
          </Button>
        </Link>
      </div>

      {/* Course List */}
      {courses.length === 0 ? (
        <div className="bg-muted/50 rounded-lg p-12 text-center">
          <h4 className="text-xl font-medium mb-4">No courses yet</h4>
          <p className="text-muted-foreground mb-6">
            Create your first AI-generated course to get started
          </p>
          <Button
            className="bg-primary hover:bg-primary/90"
          >
            Create Your First Course
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCourses;
