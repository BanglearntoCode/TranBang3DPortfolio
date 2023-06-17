import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from "../styles"
import {services} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gredient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max: 45, scale: 1, speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
<h3 className='text-white white-[20px] font-bold text-center'>{title}</h3>
        </div>
        
        </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
    <motion.dev variants={textVariant()}>
<p className={styles.sectionSubText}  >Introduction</p>
<h2 className={styles.sectionHeadText}>Overview</h2>

    </motion.dev>
    <motion.p 
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
    I am a skilled developer with a strong background in ReactJS, Node.js, MongoDB, and Express. I have extensive experience in building web applications using these technologies, leveraging their robust features and scalability. Additionally, I possess proficient knowledge of Python, particularly in object-oriented programming, Selenium automation, and data visualization. My passion for coding and problem-solving drives me to deliver high-quality solutions and continuously expand my skills in te ever-evolving field of software development.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
{services.map((service, index) => (
  <ServiceCard key={service.title} index={index} {...service} />
)

)}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")