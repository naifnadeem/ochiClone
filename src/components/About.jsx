function About() {
  return (
    <div  className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black  ">
      <h1 className="font-['navbarfont'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] pt-10 mt-20 border-[#a1b562] flex gap-5 ">
        <div className="w-1/2">
        <h1 className="text-5xl">Our approach:</h1>
        <button className=" uppercase px-5 py-4 bg-zinc-900 mt-10 rounded-full text-white flex items-center justify-center gap-10">Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100  "></div>
        </button>
        

        </div>
        <div className="w-1/2 h-[60vh] bg-[#b0c859] rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
