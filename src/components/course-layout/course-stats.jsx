import { CourseDetails } from "@/data/courseData";
import { Card } from "@/components/ui/card";

export default function CourseStats({ course }) {
    return (
        <Card className="p-6 mb-6 capitalize">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex items-center">
                    <div className="bg-primary/10 p-3 rounded-md mr-3">
                        <svg
                            className="h-6 w-6 text-[#0080FF]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 3v18h18" />
                            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground">Skill Level</div>
                        <div className="font-bold">{course.difficulty}</div>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="bg-[#0080FF]/10 p-3 rounded-md mr-3">
                        <svg
                            className="h-6 w-6 text-[#0080FF]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-bold">{course.duration}</div>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="bg-[#0080FF]/10 p-3 rounded-md mr-3">
                        <svg
                            className="h-6 w-6 text-[#0080FF]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 01-2.5-2.5z" />
                            <path d="M10 2v20" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground">No Of Chapters</div>
                        <div className="font-bold">{course.noOfChapters}</div>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="bg-[#0080FF]/10 p-3 rounded-md mr-3">
                        <svg
                            className="h-6 w-6 text-[#0080FF]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground">Video Included?</div>
                        <div className="font-bold">{course.hasVideo}</div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
