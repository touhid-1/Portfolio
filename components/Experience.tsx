import React from 'react'

type Props = {}

function Experience({ }: Props) {
  return (
    <div
      className="flex flex-col relative text-center h-screen justify-center md:text-left md:flex-row max-w-5xl mx-auto px-10 py-28 items-center">
      <h3 className="absolute top-16 left-8 text-[#0891b2] text-2xl">{'<experience>'}</h3>


      <h3 className="absolute bottom-4 left-8 text-[#0891b2] text-2xl">{'</experience>'}</h3>

    </div>
  )
}

export default Experience