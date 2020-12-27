import React from 'react';
import ProjectCard from './ProjectCard'

const ProjectList = () => {
    const projects = [
        {
            name:'Text Proofreader',
            url:'', 
            github:'https://github.com/Waraba2/Text-Proofreader', 
            languages:'C++',
            description:
             'Analyses text and return if a word is repeated too much in a the text.',
        },
        {
            name:'Arithmetic Expression Evaluator',
            url:'', 
            github:'https://github.com/Waraba2/Arithmetic-Expression-Evaluator', 
            languages:'C++',
            description:
             'A program that evaluates arithmetic operations using a data structure called stacks.',
        },

        {
            name:'Portfolio Website',
            url:'https://waraba2.github.io/My-Website/', 
            github:'https://github.com/Waraba2/My-Website', 
            languages:'React.js',
            description:
             'This a website that displays my software development skills.',
        },
        {
            name:'Sorting Algorithm analysis',
            url:'', 
            github:'https://github.com/Waraba2/Compare-Sorting-Algorithms', 
            languages:'C++',
            description:
             'Programed and compared sorting algorithms like Merge, Quick, Heap, Selection and Insertion sort.',
        },

        {
            name:'Doubly Circular Linked List',
            url:'', 
            github:'https://github.com/Waraba2/Doubly-Circular-Linked-List', 
            languages:'C++',
            description:
             'Implementation of a data structure',
        },
    ];
    return (
      <div className="py-3 d-flex flex-column justify-content-center align-items-center align-content-center">
        <h2 style={{color: 'White'}}>My Projects</h2>
        <div className="container">
        <div className="row justify-content-center">{
            projects.map((project, index)=>(
                <ProjectCard 
                key={index} 
                url={project.url} 
                name={project.name} 
                github={project.github} 
                languages={project.languages}
                description={project.description}
                />
            ))
        }</div>
    </div>
    </div>
    );
};

export default ProjectList;