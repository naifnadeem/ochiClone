import  { useEffect, useState } from "react";
import "./Eyes.css";

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle-180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="eyes w-full h-screen overflow-hidden">
            <div data-scroll data-scroll-speed = "-.7"  className="relative w-full h-full eyes-background">
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                        <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                        <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
