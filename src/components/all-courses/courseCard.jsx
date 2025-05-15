import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";


const CourseCard = ({ course }) => {
  // Function to determine badge color based on difficulty
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800 hover:bg-green-100/80";
      case "intermediate":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100/80";
      case "advanced":
        return "bg-red-100 text-red-800 hover:bg-red-100/80";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100/80";
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={course.image || ""}
          alt={course.topic}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg line-clamp-2 capitalize">{course.topic}</h3>
          <Badge
            className={`ml-2 capitalize ${getDifficultyColor(course.difficulty)}`}
            variant="outline"
          >
            {course.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {course.topicDescription}
        </p>
        <div className="flex flex-wrap gap- text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Chapters</span>
            <span className="font-medium">{course.noOfChapters}</span>
          </div>
          <div className="flex justify-between gap-2 w-full">
            <div className="flex flex-col">
              <span className="text-muted-foreground">Duration</span>
              <span className="font-medium">{course.duration}</span>
            </div>
            <Link href={`/course/${course.id}`}>
            <Button className="text-white text-sm font-medium transition-colors bg-blue-600 hover:bg-blue-600/80">
              View Course
            </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
