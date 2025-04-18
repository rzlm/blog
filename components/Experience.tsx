import React from 'react'

const jobs = [
    {
        company: 'Company A',
        position: 'Software Engineer',
        startDate: '2020-01-01',
        endDate: '2021-01-01',
        description: 'Worked on various projects using React and Node.js.',
        skills: ['HTML', 'CSS', 'API Management']
    },
    {
        company: 'Company B',
        position: 'Senior Developer',
        startDate: '2021-02-01',
        endDate: '2022-02-01',
        description: 'Led a team of developers to build scalable applications.',
        skills: ['JavaScript', 'React', 'Node.js', 'TypeScript']
    },
    {
        company: 'Company C',
        position: 'Lead Engineer',
        startDate: '2022-03-01',
        endDate: 'Present',
        description: 'Overseeing the development of multiple projects.',
        skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'GraphQL']
    }
]
const Experience = () => {
  return (
    <div className='border outline m-4 outline-violet-200/40 border-violet-200/20 dark:border-violet-900/20 hover:dark:outline-violet-100  hover:outline-violet-700 rounded-lg p-6  px-6 py-4 backdrop-blur-md shadow-lg hover:scale-105 transition transform duration-200'>
        <div className='flex flex-col'>
            <h1 className='font-bold text-2xl  '>Web developer</h1>
            <h2 className='text-xl font-bold text-violet-500 dark:text-violet-200  '>Company</h2>
        </div>
        <div>
            <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
                As a software developer, I have worked on various projects that showcase my skills and abilities. I have experience in both front-end and back-end development, and I am proficient in a variety of programming languages and frameworks.
            </p>
        </div>
        <div className='mt-4'>
            <h3>Skills Used</h3>
            <ul className='list-disc list-inside'>
                {jobs.map((job, index) => (
                    <li key={index} className='text-gray-500 dark:text-gray-400'>
                        {job.skills.join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Experience