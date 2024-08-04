import { motion } from 'framer-motion';
function Marquee() {
  return (
    <div   className="w-full py-10 rounded-tl-3xl  bg-[#004D43] rounded-tr-3xl flex items-center justify-center">
      <div data-scroll data-scroll-section data-scroll-speed = ".2" className="text border-t-2 border-b-2  border-zinc-300  flex overflow-hidden whitespace-nowrap">
        <motion.h1 initial = {{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity , duration: 10}} className="text-[24vw] leading-none font-[myfont] mb-5  uppercase pr-20">
          We are Ochi
        </motion.h1>
        <motion.h1 initial = {{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity , duration: 10}} className="text-[24vw] leading-none font-[myfont] mb-5  uppercase pr-20">
          We are Ochi
        </motion.h1>
        <motion.h1 initial = {{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity , duration: 10}} className="text-[24vw] leading-none font-[myfont] mb-5  uppercase pr-20">
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
