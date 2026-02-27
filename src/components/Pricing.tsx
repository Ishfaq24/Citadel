import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Daily Pass",
    price: "₹99",
    period: "per day",
    features: ["Full-day access", "WiFi included", "Charging points", "Refreshment area"],
    popular: false,
  },
  {
    name: "Weekly Pass",
    price: "₹499",
    period: "per week",
    features: ["24/7 access", "WiFi included", "Cabin access", "Locker option", "Priority seating"],
    popular: true,
  },
  {
    name: "Monthly",
    price: "₹1,499",
    period: "per month",
    features: [
      "Unlimited 24/7 access",
      "Dedicated cabin",
      "Personal locker",
      "WiFi included",
      "Priority support",
      "Group room access",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Membership
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Choose Your <span className="gold-gradient-text">Plan</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative glass-card-hover p-8 flex flex-col ${
                plan.popular ? "border-primary/60 gold-glow" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold gold-gradient-text">{plan.price}</span>
                <span className="text-muted-foreground text-sm ml-2 font-body">/{plan.period}</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                    <Check size={16} className="text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-medium transition-all duration-300 tracking-wide text-sm ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-gold-light"
                    : "border border-primary/40 text-foreground hover:bg-primary/10"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
