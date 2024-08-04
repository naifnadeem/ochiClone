import { motion } from "framer-motion";
import { useState } from "react";

function Featured() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (card) => {
    setHoveredCard(card);
  };

  const handleHoverEnd = () => {
    setHoveredCard(null);
  };

  const variants = {
    hidden: { y: "100%" },
    visible: { y: "0%" },
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-6xl font-[navbarfont] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full gap-10 flex mt-10">
          <div
            onMouseEnter={() => handleHover("fyde")}
            onMouseLeave={handleHoverEnd}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="text-[#b0c859] overflow-hidden absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[9vw] tracking-tight font-[myfont]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial="hidden"
                  animate={hoveredCard === "fyde" ? "visible" : "hidden"}
                  variants={variants}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="Fyde Project"
              />
            </div>
          </div>
          <div
            onMouseEnter={() => handleHover("vise")}
            onMouseLeave={handleHoverEnd}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
             <h1 className="text-[#b0c859] overflow-hidden absolute flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[9vw] tracking-tight font-[myfont]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial="hidden"
                  animate={hoveredCard === "vise" ? "visible" : "hidden"}
                  variants={variants}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="Vise Project"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
