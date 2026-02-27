import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aamir Hussain",
    role: "Civil Services Aspirant",
    text: "CITADEL has completely transformed my study routine. The silent environment and private cabins help me focus for hours without distraction. It's my second home now.",
  },
  {
    name: "Sana Malik",
    role: "NEET Aspirant",
    text: "Finding a quiet place to study was always a challenge. CITADEL solved that. The 24/7 access means I can study at my own pace, even late at night.",
  },
  {
    name: "Farhan Sheikh",
    role: "Engineering Student",
    text: "The facilities are world-class — fast WiFi, AC, clean space, and amazing ambiance. It doesn't feel like a library, it feels like a premium workspace.",
  },
  {
    name: "Mehak Bhat",
    role: "University Student",
    text: "I love the group study rooms for collaborative sessions and the private cabins for deep focus work. CITADEL is the best study space in Baramulla, hands down.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            What Students <span className="gold-gradient-text">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card p-8 md:p-12 text-center relative"
        >
          <Quote size={40} className="text-primary/20 mx-auto mb-6" />
          <div className="min-h-[120px] flex items-center justify-center">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-foreground/90 text-lg md:text-xl italic font-heading leading-relaxed max-w-2xl"
            >
              "{testimonials[active].text}"
            </motion.p>
          </div>
          <motion.div
            key={`name-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <p className="font-heading text-lg font-semibold gold-gradient-text">
              {testimonials[active].name}
            </p>
            <p className="text-muted-foreground text-sm font-body">{testimonials[active].role}</p>
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
