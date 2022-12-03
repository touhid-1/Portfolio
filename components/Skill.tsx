import React from 'react'
import { motion } from "framer-motion"

type Props = {
  directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className="group">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png"
        className="rounded-full border border-[#4B5563] object-cover w-16 h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
    </div>
  )
}

export default Skill