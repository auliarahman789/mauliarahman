// Photos from https://citizenofnowhe.re/lines-of-the-city
import "../components/style.css";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section>
            <div className="bg-[#826fffa9]">
                <p className='absolute left-[100px] top-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F0F3FF] to-[#15F5BA] font-bold text-3xl' >
                    Project
                </p>
            </div>
            <div ref={ref}>
                <img src={`/port/${id}.png`} alt="" />
            </div>

            <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
        </section>
    );
}

export default function Paralax2() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7].map((image) => (
                <>

                    <Image id={image} />
                </>

            ))}

            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}