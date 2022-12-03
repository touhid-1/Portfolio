import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

function Projects({ }: Props) {
  // const projects = [1, 2, 3, 4, 5];
  const projects = [
    {
      projectName: 'Pantry Pals',
      projectImage: 'https://firebasestorage.googleapis.com/v0/b/react-gallery-33fe6.appspot.com/o/20221130_195838_0000.png?alt=media&token=f0f445a4-956a-416c-bc76-ac29c1a3d8b9',
      projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Ipsa eos, quam vel quisquam, explicabo sit labore dignissimos',
      projectLive: "https://youtube.com",
      projectCode: "",
      projectTags: ['HTML']
    },
  ];

  return (
    <motion.div className="flex flex-col relative h-screen justify-evenly text-left md:flex-row  max-w-full mx-auto px-10 py-28 items-center">
      <h3 className="absolute top-16 left-8 text-[#0891b2] text-2xl">{'<projects>'}</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0891b2]/80 scrollbar-thin">
        {projects.map((project, index) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center md:justify-center py-10 px-10 md:p-44 h-screen xl:p-56" key={index}>
            <motion.img
              initial={{ y: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.projectImage} alt="Project image"
              className="w-28 h-28 lg:w-48 lg:h-48 xl:w-56 xl:h-56"
            />
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-lg lg:text-xl font-semibold text-center">
                <span className="underline decoration-[#0891b2]">Case Study {index + 1} of {projects.length}</span>
                : {project.projectName}
              </h4>

              <div className="flex-row flex">
                <div className="flex justify-center items-center bg-[#4B5563]/50 px-3 py-1 my-2 mx-2 rounded-lg max-w-max">{project.projectTags}</div>
              </div>

              <p className="text-justify">{project.projectDescription}</p>

              <div className="flex-row flex">
                <Link href={project.projectLive}>
                  <button className="flex justify-center items-center border border-[#0891b2]/50 px-3 py-1 my-2 mx-2 rounded-sm max-w-max">Live</button>
                </Link>
                <Link href={project.projectCode}>
                  <button className="flex justify-center items-center border border-[#0891b2]/50 px-3 py-1 my-2 mx-2 rounded-sm max-w-max">Code</button>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#0891b2]/10 left-0 h-[250px] -skew-y-12"></div>
      <h3 className="absolute bottom-4 left-8 text-[#0891b2] text-2xl">{'</projects>'}</h3>
    </motion.div>
  )
}

export default Projects