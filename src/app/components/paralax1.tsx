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
            <div ref={ref} className="px-4 py-4 bg-[#211951]">
                <img src={`/port/${id}.JPG`} className="rounded-xl " alt="" />
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
            {[1, 2, 3, 4, 5, 6].map((image) => (
                <>

                    <Image id={image} />
                </>

            ))}

            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}
