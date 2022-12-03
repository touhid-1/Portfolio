import React from 'react'
import { motion } from "framer-motion";
// import Skill from './Skill';

type Props = {}

function Skills({ }: Props) {
  const stacks = [
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
    "https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png",
    "https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png",
    "https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png",
    "https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png",
    "https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-5xl xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-16 left-8 text-[#0891b2] text-2xl">{'<skills>'}</h3>

      <h3 className="absolute top-28 font-bold uppercase sm:tracking-[3px] text-[#4B5563] text-xl xl:text-2xl">
        These are my tech stacks
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {/* <Skill /> */}
        {stacks.map((stack, index) => (
          <div className="group" key={index}>
            <motion.img
              initial={{
                x: 200,
                opacity: 0
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src={stack}
              className="rounded-full border border-[#4B5563] object-cover w-16 h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out p-3"
            />
          </div>
        ))}
      </div>

      <h3 className="absolute bottom-4 left-8 text-[#0891b2] text-2xl">{'</skills>'}</h3>

    </motion.div>
  )
}

export default Skills