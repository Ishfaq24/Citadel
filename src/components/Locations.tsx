import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const branches = [
  {
    name: "Main Branch — Baramulla",
    description: "Our flagship location with premium cabins, silent zones, and full amenities.",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.5!2d74.36!3d34.20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDEyJzAwLjAiTiA3NMKwMjEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1",
  },
  {
    name: "Branch 2 — Sheeri",
    description: "Expanding excellence to Sheeri with the same premium study environment.",
    mapUrl: null,
  },
];

const Locations = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="locations" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Locations
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Find Your <span className="gold-gradient-text">Space</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass-card-hover overflow-hidden"
            >
              {branch.mapUrl ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={branch.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={branch.name}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-secondary/50 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">Coming Soon</p>
                  </div>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-primary" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {branch.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm font-body">{branch.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
