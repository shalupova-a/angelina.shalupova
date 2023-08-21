import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, width = "fit-content" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const animation = useAnimation();

    useEffect(() => {
        console.log(inView);
        if (inView) {
            animation.start("visible")
            console.log(animation);
        } else {
            animation.start('hidden')
        }
    }, [inView, animation]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }} intial="hidden" animate="visible" transition={{ duration: 1, delay: 0.25 }}>
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal;