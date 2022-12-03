import Link from 'next/link'
import React from 'react'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({ }: Props) {
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://firebasestorage.googleapis.com/v0/b/react-gallery-33fe6.appspot.com/o/IMG_20221128_015108.jpg?alt=media&token=c32e94e4-8fae-4b22-af10-95a1503f05cd"
                alt=""
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[8px]">
                    Software Developer
                </h2>
                <div className="text-3xl md:text-6xl font-semibold px-10">
                    <h1 className="text-[#0891b2]">{'<Touhid Saleem/>'}</h1>
                </div>

                <div className="pt-5 sm:block hidden">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}