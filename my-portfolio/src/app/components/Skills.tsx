import React from 'react'

const skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
          <p className='text-white pt-2'>
            I Have A Solid Foundation In Web Development, Specializing In HTML, CSS, And JavaScript. My Experience Extends To Using Frameworks like React And Next.js To Create Dynamic And User-Friendly Applications. I'm Also Proficient In TailWind CSS For Efficient Styling And Design, With A Passion For Learning. I Stay Update On The Latest Technologies To Enhance My Skills Set And Contribute Effectively To Projects.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-white-50 text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up" >React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default skills
