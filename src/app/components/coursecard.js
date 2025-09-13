import React from 'react';

const data = [
  {
    "courseCode": "CS 1200",
    "title": "Introduction to Computer Science and Software Engineering",
    "description": "Overview of computer science and software engineering concepts.",
    "creditHours": 2
  }
];

const CourseCard = (props) => {
  return (
    <div className='flex flex-col gap-2 sm:m-5 md:m-20 lg:m-20 border border-gray-400 p-2 rounded-md'>
      <h1 className='text-blue-600 font-bold text-2xl'>{props.courseCode}</h1>
      <div className='text-gray-600 font-bold text-xl'>{props.title}</div>
      <div className='text-gray-400 text-md'>{props.description}</div> 
      <div className='text-green-600 text-sm bg-green-300 w-fit p-1 rounded-md'>{props.creditHours} credit hours</div>
    </div>
  );
};

export default CourseCard;