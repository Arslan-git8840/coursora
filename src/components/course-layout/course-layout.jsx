import React from 'react'
import CourseHeader from './course-header'
import CourseStats from './course-stats'
import CourseChapters from './course-chapters'

const CourseLayout = ({ data, start, generate }) => {
    return (
        <div className="max-w-6xl w-full mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Course Layout</h1>
            <CourseHeader course={data} startButton={start}/>
            <CourseStats course={data} />
            <CourseChapters course={data} generateButton={generate}/>
        </div>
    )
}

export default CourseLayout