import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data =[
   
    {
        id: 1,
        title:"Static Interactive Resume",
        desc:"A TypeScript-Based Interactive Resume Built With HTML And CSS, Allowing Users To Showcase Their Skills Dynamically.",
        img:"/project-01.png",
        tags:[ "HTML", "CSS", "Node", "TypeScript"],
    },
    {
        id: 2,
        title:"Dynamic Resume Builder",
        desc:"A TypeScript-Based Dynamic Resume Built With HTML And CSS, Allowing Users To Showcase Thier Skills Dynamically.",
        img:"/project-02.png",
        tags:["HTML", "CSS", "Node", "TypeScript"],
    },
    {
        id: 4,
        title:"Editable Interactive Resume",
        desc:"A TypeScript-Based Editable Interactive Resume Built With HTML And CSS, Allowing Users To Showcase Thier Skills Dynamically.",
        img:"/project-03.png",
        tags:["HTML", "CSS", "Node", "TypeScript"],
    },
    {
        id: 5,
        title:"Shareable Resume Builder",
        desc:"A TypeScript-Based Shareable Resume Built With HTML And CSS, Allowing Users To Showcase Thier Skills Dynamically.",
        img:"/project-04.png",
        tags:["HTML", "CSS", "Node", "TypeScript"],
    },
];

const project = () =>{
  return (
    <div id='project' className='container pt-32'>
      <Heading title= 'My Project'/>
      <div className= 'grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (< Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        /> ))}
      </div>
    </div>
  );
};

export default project 