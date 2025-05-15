'use client';
import React, { useState } from 'react';
import CourseSteps from '@/components/course-steps';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import CategoryCard from '@/components/category-card';
import {
  CategoryIcon,
  TopicIcon,
  OptionsIcon,
  ProgrammingIcon,
  HealthIcon,
  CreativeIcon,
} from '@/components/course-icons';
import { Gauge, Clock, Video, BookOpen } from 'lucide-react';
import { Nunito, } from 'next/font/google';
import { callAi } from '@/lib/gemini';
import { saveCourseLayout } from '@/lib/drizzleActions';
import { useRouter } from 'next/navigation';


const steps = [
  { id: 1, name: "Category", icon: <CategoryIcon /> },
  { id: 2, name: "Topic & Desc", icon: <TopicIcon /> },
  { id: 3, name: "Options", icon: <OptionsIcon /> },
];

const CourseForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    topic: "",
    description: "",
    difficulty: "",
    duration: "",
    hasVideo: "",
    chapters: "",
  });

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFormData({ ...formData, category });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    console.log("Form submitted with data:", formData);
    const id = crypto.randomUUID();
    console.log(id);

    const prompt = process.env.NEXT_PUBLIC_GEMINI_PROMPT;
    console.log('myprompt', prompt);
    const promptTemplate = prompt
      .replace("{category}", formData.category)
      .replace("{topic}", formData.topic)
      .replace("{description}", formData.description)
      .replace("{difficultyLevel}", formData.difficulty)
      .replace("{duration}", formData.duration)
      .replace("{hasVideo}", formData.hasVideo ? "true" : "false")
      .replace(/{noOfChapters}/g, formData.chapters);
    console.log("promptTemplate", promptTemplate);
    
    const geminiResponse = await callAi(promptTemplate);

    const data = { category: formData.category, topic: formData.topic, duration: formData.duration, hasVideo: formData.hasVideo, difficulty: formData.difficulty, noOfChapters: formData.chapters, id: id };

    console.log(geminiResponse.text);

    const res = await saveCourseLayout({ GeminiResponse: geminiResponse.text, data });

    console.log(res.courseId);
    router.push(`/create-course/${res.courseId}`);

    setFormData({
      category: "",
      topic: "",
      description: "",
      difficulty: "",
      duration: "",
      hasVideo: "",
      chapters: "",
    });

  };

  return (
    <div className={`max-w-5xl mx-auto px-4`}>
      <h1 className="text-3xl font-bold text-center text-[#6E59A5] mb-8">
        Create Course
      </h1>

      <CourseSteps steps={steps} currentStep={currentStep} />

      {currentStep === 1 && (
        <div className="space-y-8">
          <h2 className="text-xl font-medium">Select the Course Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CategoryCard
              title="Programming"
              icon={<ProgrammingIcon />}
              selected={selectedCategory === "programming"}
              onClick={() => handleCategorySelect("programming")}
            />
            <CategoryCard
              title="Health"
              icon={<HealthIcon />}
              selected={selectedCategory === "health"}
              onClick={() => handleCategorySelect("health")}
            />
            <CategoryCard
              title="Creative"
              icon={<CreativeIcon />}
              selected={selectedCategory === "creative"}
              onClick={() => handleCategorySelect("creative")}
            />
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span>✍️</span>
              <label className="text-sm font-medium">
                Write the topic for which you want to generate a course (e.g., Historian Course, Yoga, etc.):
              </label>
            </div>
            <Input
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="e.g., SQL"
              className="w-full p-3"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span>💬</span>
              <label className="text-sm font-medium">
                Tell us more about your course, what you want to include in the course (Optional)
              </label>
            </div>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="About your course"
              className="w-full p-3 min-h-32"
            />
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-muted-foreground" />
              <label className="text-sm font-medium">Difficulty Level</label>
            </div>
            <Select
              value={formData.difficulty}
              onValueChange={(value) => handleSelectChange("difficulty", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Beginner" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <label className="text-sm font-medium">Course Duration</label>
            </div>
            <Select
              value={formData.duration}
              onValueChange={(value) => handleSelectChange("duration", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="30 min">30 min</SelectItem>
                  <SelectItem value="1 hour">1 hour</SelectItem>
                  <SelectItem value="1.5 hour">1.5 hour</SelectItem>
                  <SelectItem value="2 hour">2 hour</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-muted-foreground" />
              <label className="text-sm font-medium">Add Video</label>
            </div>
            <Select
              value={formData.hasVideo}
              onValueChange={(value) => handleSelectChange("hasVideo", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-muted-foreground" />
              <label className="text-sm font-medium">No of Chapters</label>
            </div>
            <Input
              name="chapters"
              type="number"
              value={formData.chapters}
              onChange={handleChange}
              placeholder="Enter number of chapters"
              min="1"
              max="20"
              className="w-full p-3"
            />
          </div>
        </div>
      )}

      <div className="flex justify-between mt-12">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="px-8"
        >
          Previous
        </Button>

        {currentStep < 3 ? (
          <Button
            onClick={handleNext}
            className="bg-[#9b87f5] hover:bg-[#6E59A5] text-white px-8"
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            className="bg-[#9b87f5] hover:bg-[#6E59A5] text-white px-8"
          >
            Generate Course Layout
          </Button>
        )}
      </div>
    </div>
  );
};

export default CourseForm;