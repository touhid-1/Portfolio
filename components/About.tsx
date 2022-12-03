import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center h-screen justify-center md:text-left md:flex-row max-w-5xl mx-auto px-10 py-28 items-center">
      <h3 className="absolute top-16 left-8 text-[#0891b2] text-2xl">{'<about>'}</h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1, }}
        viewport={{ once: true }}
        src="https://firebasestorage.googleapis.com/v0/b/react-gallery-33fe6.appspot.com/o/IMG_20221128_015108.jpg?alt=media&token=c32e94e4-8fae-4b22-af10-95a1503f05cd"
        className=" md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 lg:w-[30%] lg:h-[70%]"
      />

      <div className="px-0 md:px-10 max-h-[90%]">
        <h4 className="text-1xl my-2 md:text-2xl font-semibold">Here is a <span className="underline decoration-[#0891b2]">little</span> background</h4>
        <p className="text-justify text-sm md:text-xl">
          Hi, I'm Touhid Saleem a Student and Software Developer💻 who has experience of 1 year in Web technologies🌐 and 6 months of experience in Mobile technologies📱.
          <br />
          Talking about my skills. I am extremely proficient in Front-End development using HTML5, Cascading Style Sheet (CSS3), Bootstrap, Tailwind, Advance JavaScript, Reactjs & Vuejs and also have a pretty good Knowledge of React Native and Firebase. Apart from this trying to extend my skills list with Back-End using Node.js💯.
        </p>

        <button className="flex justify-center items-center border border-[#0891b2]/50 px-3 py-1 my-2 rounded-sm max-w-max hover:text-[#0891b2]">Download CV</button>
      </div>

      <h3 className="absolute bottom-4 left-8 text-[#0891b2] text-2xl">{'</about>'}</h3>

    </motion.div>
  )
}

export default About