import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({ }: Props) {
    return (
        <motion.div 
            initial={{
                opacity:0,
            }}
            animate={{
                scale: [1,2,2,3,1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.5],
                // opacity:1,
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 2.5
            }}
        className="relative flex justify-center mt-40 items-center">
            <div className="absolute border border-[#4B5563] rounded-full h-[100px] w-[100px] mt-48 animate-ping"/>
            <div className="absolute border border-[#4B5563] rounded-full h-[200px] w-[200px] mt-48"/>
            <div className="absolute border border-[#4B5563] rounded-full h-[400px] w-[400px] mt-48"/>
            <div className="rounded-full border border-[#0891b2 opacity-20 h-[550px] w-[550px] absolute mt-48 animate-pulse" />
        </motion.div>
    )
}

export default BackgroundCircles