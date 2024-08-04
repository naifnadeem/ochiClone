function Cards() {
  return (
    <div className="w-full h-screen  bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[60vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
            <img className="w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className=" text-[#B5D864] absolute left-10 bottom-10 border-2 px-5 py-1 rounded-full border-[#B5D864] ">&copy;2019-2024</button>
        </div>
      </div>
      <div className="cardcontainer flex  gap-5   h-[60vh] w-1/2">
        <div className="card w-1/2 relative rounded-xl h-full flex items-center justify-center bg-[#212121]">
        <img className="w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className=" text-white absolute left-10 bottom-10 border-2 px-5 py-1 rounded-full border-white">RATING 5.0 ON CL</button>
        </div>
        <div className="card w-1/2 relative rounded-xl h-full flex items-center justify-center bg-[#212121]">
        <img className="w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className=" text-white absolute left-10 bottom-10 border-2 px-5 py-1 rounded-full border-white">BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
      
    </div>
  );0
}

export default Cards;
