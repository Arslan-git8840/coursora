import React from 'react';
import { cn } from '@/lib/utils';


const CourseSteps = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-center w-full mb-12">
      {steps.map((step, index) => {
        const isActive = index + 1 <= currentStep;
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center",
                  isActive
                    ? "bg-[#9b87f5] text-white"
                    : "bg-gray-200 text-gray-500"
                )}
              >
                {step.icon}
              </div>
              <div className="mt-2 text-sm font-medium">{step.name}</div>
            </div>
            
            {!isLast && (
              <div
                className={cn(
                  "h-1 flex-1 mx-2",
                  index + 1 < currentStep ? "bg-[#9b87f5]" : "bg-gray-200"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CourseSteps;
