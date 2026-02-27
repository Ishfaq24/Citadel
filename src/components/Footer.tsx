const Footer = () => {
  return (
    <footer className="border-t border-border/30 px-6 py-12 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-heading text-2xl font-bold gold-gradient-text mb-2">
              CITADEL
            </h3>
            <p className="text-muted-foreground text-sm font-body">
              Library Meets Cabins
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-3 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["About", "Facilities", "Pricing", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="block text-muted-foreground text-sm font-body hover:text-primary transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-3 text-sm tracking-wider uppercase">
              Contact
            </h4>
            <p className="text-muted-foreground text-sm font-body">
              +91 96826 33317
            </p>
            <p className="text-muted-foreground text-sm font-body">
              +91 96223 06126
            </p>
            <p className="text-muted-foreground text-sm font-body mt-2">
              Baramulla, Kashmir
            </p>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 text-center space-y-2">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} CITADEL. All rights reserved.
          </p>

          {/* Developer Credit */}
          <p className="text-muted-foreground text-xs font-body">
            Designed & Developed by{" "}
            <a
              href="https://nexgendevelopers.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              NextGen Developers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;