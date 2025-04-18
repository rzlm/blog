interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'covid-19 data analysis project',
    description: `analysed a large ontario covid-19 dataset using python and visualized it using matplotlib, to determine if there was a correlation between cases and different age groups`,
    imgSrc: '/static/images/covid.png',
    href: 'https://www.google.com',
  },
  {
    title: 'appointment scheduling system',
    description: `created an appointment scheduling system for medium sized businesses to help them manage appointments.`,
    imgSrc: '/static/images/time-machine.jpkg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
