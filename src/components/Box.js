import React,{useEffect} from 'react'
import { useAnimation,motion } from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const Box = () => {

    const boxVariant = {
        visible: {  scale: 1,x:100, transition: { duration: 0.5 } },
        hidden: { x:0}
      };

    const control=useAnimation()
    const[ref,inView]=useInView()

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);

  return (
    <motion.div  ref={ref} className='w-[300px] h-[300px] bg-red-600'  variants={boxVariant}
    initial="hidden"
    animate={control}>

    </motion.div>
  )
}

export default Box