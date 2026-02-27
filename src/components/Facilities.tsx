import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Armchair, Lightbulb, Wind, Lock, Volume2, Zap, Wifi, PenTool,
  Coffee, Clock, Shield, Droplets, KeyRound, Cctv, Battery,
  LocateFixed, Users, BookOpen,
} from "lucide-react";

const facilities = [
  { icon: Armchair, label: "Comfortable Seating" },
  { icon: Lightbulb, label: "Adequate Lighting" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Lock, label: "Personal Lockers" },
  { icon: Volume2, label: "Noise-Free Zone" },
  { icon: Zap, label: "Charging Points" },
  { icon: Wifi, label: "Free High-Speed WiFi" },
  { icon: PenTool, label: "Basic Stationery" },
  { icon: Coffee, label: "Refreshment Area" },
  { icon: Clock, label: "24/7 Access" },
  { icon: Shield, label: "Security Measures" },
  { icon: Droplets, label: "Drinking Water" },
  { icon: BookOpen, label: "Private Study Cabins" },
  { icon: Cctv, label: "CCTV Surveillance" },
  { icon: KeyRound, label: "Biometric Entry" },
  { icon: Battery, label: "Power Backup" },
  { icon: LocateFixed, label: "Flexible Seating" },
  { icon: Users, label: "Group Study Rooms" },
];

const Facilities = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="facilities" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Facilities
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Everything You <span className="gold-gradient-text">Need</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {facilities.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card-hover p-5 flex flex-col items-center text-center gap-3 group cursor-default"
            >
              <item.icon
                size={28}
                className="text-primary group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-body">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
