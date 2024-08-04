import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed = "-.3" className="w-full h-screen pt-1">
      <div className="textstructure mt-20 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center ">
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1.5 }} className="w-[9vw] h-[5.6vw] bg-green-500 mt-3 rounded-md mr-4"></motion.div>
                )}
                <h1 className="uppercase text-[9vw] leading-[7vw]  font-['myfont'] font-extrabold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center pb-28 pt-5 px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-4">
          <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-sm uppercase">
            Start the project{" "}
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] rounded-full ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
