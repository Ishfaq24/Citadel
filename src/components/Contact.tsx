import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919682633317?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Contact
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Get in <span className="gold-gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 flex items-start gap-4">
              <Phone size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Call Us</h4>
                <p className="text-muted-foreground font-body">
                  <a href="tel:+919682633317" className="hover:text-primary transition-colors">
                    +91 96826 33317
                  </a>
                </p>
                <p className="text-muted-foreground font-body">
                  <a href="tel:+919622306126" className="hover:text-primary transition-colors">
                    +91 96223 06126
                  </a>
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <MapPin size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Locations</h4>
                <p className="text-muted-foreground font-body">Main Branch — Baramulla</p>
                <p className="text-muted-foreground font-body">Branch 2 — Sheeri</p>
              </div>
            </div>
          </motion.div>

          <motion.form

            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 space-y-5"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary/60 transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                required
                maxLength={15}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary/60 transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                required
                maxLength={500}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary/60 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300"
            >
              {submitted ? "Sent!" : <><Send size={16} /> Send via WhatsApp</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
