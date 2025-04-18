import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import Experience from '@/components/Experience'

import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
export default async function Page() {
  // const sortedPosts = sortPosts(allBlogs)
  // const posts = allCoreContent(sortedPosts)
  // return <Main posts={posts} />
return(
  <div className="divide-y divide-gray-200 dark:divide-gray-700">
  <div className="space-y-2 pt-6 pb-8 md:space-y-5">
  <p className="text-lg leading-7 text-violet-400 dark:text-violet-300">
Learning - Designing - Developing    </p>
    <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-violet-950 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-violet-200">
      Razan Mohamed
    </h1>
    <h2 className='text-2xl font-bold '>About me</h2>
    <p className='dark:text-violet-300 text-lg text-violet-900 leading-7'> I’m an aspiring software engineer that loves tackling problems and turning them into innovative solutions.</p>
    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
    From creating intuitive front-end experiences to building robust back-end systems, I enjoy working across the stack to bring ideas to life. I’m passionate about learning new technologies, improving my skills, and creating software that’s both impactful and user-friendly. Whether it’s building web apps from the ground up or collaborating on meaningful projects, I’m always excited to grow and take on new challenges in tech.
    </p>
    <div className="z-20 mt-8 flex gap-4">
        <button className=" hover:cursor-pointer dark:bg-white/10 dark:text-violet-200 bg-violet-400/40 text-violet-800 px-5 py-2 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition transform duration-200 border dark:border-white/20 border-violet-900/20 hover:bg-violet-100/30 hover:border-violet-200">
          Contact me
        </button>
        <button className="hover:cursor-pointer dark:bg-violet-200/10  bg-violet-400/40 dark:text-violet-200 text-violet-800 px-5 py-2 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition transform duration-200 border dark:border-white/20 border-violet-900/20 hover:bg-violet-100/30 hover:border-violet-200">
          My projects
        </button>
      
      </div>
</div>
<div className='py-12'>
  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100  ">My Projects</h2>
  <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
    I have worked on several projects that showcase my skills and abilities. You can find more details about them on my projects page.
    </p>
    <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
  </div>

  
  <div className='py-12'>
  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">My Experience</h2>
  <Experience />
  <Experience />
  </div>
</div>
)


}
