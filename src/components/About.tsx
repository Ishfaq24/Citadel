import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Access", value: "24/7", suffix: "" },
  { label: "Study Seats", value: 50, suffix: "+" },
  { label: "Private Cabins", value: 12, suffix: "+" },
  { label: "Happy Students", value: 500, suffix: "+" },
];

const AnimatedCounter = ({ target, suffix }: { target: number | string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || typeof target === "string") return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="gold-gradient-text font-heading text-4xl md:text-5xl font-bold">
      {typeof target === "string" ? target : count}
      {suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">About Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            What is <span className="gold-gradient-text">CITADEL</span>?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed font-light">
            CITADEL is a premium 24/7 study space that seamlessly combines the tranquility of a
            silent library with the privacy of individual study cabins. Designed for serious
            learners — from civil services aspirants to medical students — we provide the perfect
            environment to focus, grow, and achieve.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-6 text-center"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground text-sm mt-2 tracking-wide uppercase font-body">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
